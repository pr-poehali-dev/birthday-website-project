import os
import requests
import boto3

def handler(event: dict, context) -> dict:
    """Скачивает аудиофайл с Яндекс.Диска и загружает в S3 хранилище сайта"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    yandex_url = "https://downloader.disk.yandex.ru/disk/2a6ca3f7affd0de875ad718e13bdb8857b7d9c4e63885e7c652919fe6b6d513d/6a372447/UidB0OMIcgbHqscIOEEnAC3RC3IY-7LiowVszMN96Xgz9-RJVtu60VXOrmxNPtXcI0WdNhpYMcwGgyEhnFMjnw%3D%3D?uid=0&filename=%D0%9F%D0%B0%D0%BF%D0%B0_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9__%D0%9D%D0%B0%D1%88_%D0%9E%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80_FULL_SONG_MusicGPT.mp3&disposition=attachment&hash=TcT7PJeOItGootZoI2BlRAxoBb7ttfKuUsezj4I3tWjDPrlEvUhkvQBAsQ%2BywPlsq/J6bpmRyOJonT3VoXnDag%3D%3D%3A&limit=0&content_type=audio%2Fmpeg&owner_uid=1159049266&fsize=3450505&hid=1a85b4c0bee0b1be6139ba30fc1bab5a&media_type=audio&tknv=v3&is_direct_zip_experiment=1"

    response = requests.get(yandex_url, timeout=60)
    response.raise_for_status()

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )

    s3.put_object(
        Bucket='files',
        Key='audio/papa-song.mp3',
        Body=response.content,
        ContentType='audio/mpeg'
    )

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/audio/papa-song.mp3"

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': f'{{"url": "{cdn_url}"}}'
    }
