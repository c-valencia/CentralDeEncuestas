from django.conf.urls import url
from .views import UserList, UserDetail

urlpatterns = [
    url(r'^user/$', UserList.as_view()),
    url(r'^user/(?P<pk>[0-9]+)/$', UserDetail.as_view()),
]
