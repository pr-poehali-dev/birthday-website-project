import json
import os
import psycopg2

SCHEMA = 't_p86187819_birthday_website_pro'

def get_conn():
    return psycopg2.connect(os.environ['DATABASE_URL'])

def handler(event: dict, context) -> dict:
    """Управление пожеланиями: получение, добавление, удаление."""
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Session-Id',
        'Content-Type': 'application/json',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    method = event.get('httpMethod', 'GET')

    if method == 'GET':
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(f"SELECT id, name, text, session_id, created_at FROM {SCHEMA}.wishes ORDER BY created_at DESC")
        rows = cur.fetchall()
        conn.close()
        wishes = [{'id': r[0], 'name': r[1], 'text': r[2], 'session_id': r[3]} for r in rows]
        return {'statusCode': 200, 'headers': headers, 'body': json.dumps({'wishes': wishes})}

    if method == 'POST':
        body = json.loads(event.get('body') or '{}')
        name = body.get('name', '').strip()
        text = body.get('text', '').strip()
        session_id = (event.get('headers') or {}).get('X-Session-Id', '')
        if not name or not text or not session_id:
            return {'statusCode': 400, 'headers': headers, 'body': json.dumps({'error': 'Missing fields'})}
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(f"INSERT INTO {SCHEMA}.wishes (name, text, session_id) VALUES (%s, %s, %s) RETURNING id", (name, text, session_id))
        wish_id = cur.fetchone()[0]
        conn.commit()
        conn.close()
        return {'statusCode': 200, 'headers': headers, 'body': json.dumps({'id': wish_id, 'name': name, 'text': text, 'session_id': session_id})}

    if method == 'DELETE':
        body = json.loads(event.get('body') or '{}')
        wish_id = body.get('id')
        session_id = (event.get('headers') or {}).get('X-Session-Id', '')
        if not wish_id or not session_id:
            return {'statusCode': 400, 'headers': headers, 'body': json.dumps({'error': 'Missing fields'})}
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(f"DELETE FROM {SCHEMA}.wishes WHERE id = %s AND session_id = %s", (wish_id, session_id))
        deleted = cur.rowcount
        conn.commit()
        conn.close()
        if deleted == 0:
            return {'statusCode': 403, 'headers': headers, 'body': json.dumps({'error': 'Not allowed'})}
        return {'statusCode': 200, 'headers': headers, 'body': json.dumps({'ok': True})}

    return {'statusCode': 405, 'headers': headers, 'body': json.dumps({'error': 'Method not allowed'})}