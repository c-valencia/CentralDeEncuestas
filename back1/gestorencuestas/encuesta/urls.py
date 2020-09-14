from django.conf.urls import url
from .views import ContactoList, ContactoDetail, EncuestaList, EncuestaDetail

urlpatterns = [
    url(r'^contacto/$', ContactoList.as_view()),
    url(r'^contacto/(?P<pk>[0-9]+)/$', ContactoDetail.as_view()),
    url(r'^encuesta/$', EncuestaList.as_view()),
    url(r'^encuesta/(?P<pk>[0-9]+)/$', EncuestaDetail.as_view()),
]