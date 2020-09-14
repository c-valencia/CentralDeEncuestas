import os

os.environ['DJANGO_SETTINGS_MODULE'] = 'gestorencuestas.settings'
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from django.template.loader import get_template
from django.shortcuts import render
class Email:
    emisor = ""
    receptor = ""
    titulo = ""
    cuerpo = ""
    #encuesta = Encuesta()

    def enviar_email(self, email, enlace):
        #print(email)
        context = {'enlace':enlace}
        template = get_template('correo.html')
        content = template.render(context)
        correo = EmailMultiAlternatives(
            'Encuenta asociado',
            'Coomeva',
            settings.EMAIL_HOST_USER,
            [email],
        )
        correo.attach_alternative(content, 'text/html')
        correo.send()

