from django.urls import re_path
from . import consumers
#Routing estabelece o roteamento entre chat e consumidor
websocket_urlpatterns = [
    re_path(r"ws/chat/(?P<room_name>\w+)/$", consumers.ChatConsumer.as_asgi()),
]