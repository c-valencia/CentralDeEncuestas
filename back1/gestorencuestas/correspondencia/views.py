from django.conf import settings 
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template.loader import get_template
from django.core.mail import EmailMultiAlternatives
from sendsms.message import SmsMessage

# Create your views here.

def send_email(mail):
    context = {'mail':mail}
    template = get_template('correo.html')
    content = template.render()
    email = EmailMultiAlternatives(
        'Un correo de prueba',
        'codigofacilito',
        settings.EMAIL_HOST_USER,
        [mail]
    )
    email.attach_alternative(content, 'text/html')
    email.send()
    #api.send_sms(body='I can haz txt', from_phone='+57 3183679592', to=['+57 3183679592'])
    message = SmsMessage(body='I can haz txt', from_phone='573183443996', to=['573183679592'])
    message.send()

def correspondencia(request):
    if request.method == 'POST':
        mail = request.POST.get('mail')
        send_email(mail)

    return render(request, "correspondencia.html", {})