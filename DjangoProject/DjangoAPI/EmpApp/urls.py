import imp
from os import stat
from django.urls import re_path
from DjangoAPI.settings import MEDIA_ROOT, MEDIA_URL
from EmpApp import views
from EmpApp.models import Students
from django.conf.urls.static import static
from django.conf import settings    

urlpatterns =[
    re_path(r'^$',views.departmentApi),
    re_path(r'^department/$',views.departmentApi),
    re_path(r'^department/([0-9]+)$',views.departmentApi),
    
    re_path(r'^student/$',views.studentApi),
    re_path(r'^student/([0-9]+)$',views.studentApi),

    re_path(r'^SaveFile/$', views.SaveFile)
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)