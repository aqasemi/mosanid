"""
URL configuration for mosanid project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.views.generic.base import RedirectView
from django.conf.urls.static import static
from django.views.static import serve
from django.conf import settings
from django.urls import re_path, path
from api.views import login, launch, get_jwks, test


favicon_view = RedirectView.as_view(url='/static/favicon.ico', permanent=True)

urlpatterns = [
    path('api/login', login, name='mosanid-login'),
    path('api/launch', launch, name='mosanid-launch'),
    path('api/jwks', get_jwks, name='mosanid-jwks'),
    re_path(r'^favicon\.ico$', favicon_view),
    re_path(r'^assets/(?P<path>.*)$', serve, {'document_root': settings.STATICFILES_DIRS[1]}),
    path('api/hi', test, name='hi')
]

