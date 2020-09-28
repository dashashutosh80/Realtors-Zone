from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from django.core.mail import send_mail
from rest_framework.response import Response
from traceback import print_exc
from django.conf import settings

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        try:
            send_mail(
                    data['subject'],
                    'Name: '
                    + data['name']
                    + '\nEmail:'
                    + data['email']
                    +'\n\nMessage:\n'
                    + data['message'],
                    settings.EMAIL_HOST_USER, 
                    [settings.EMAIL_HOST_USER],
                    fail_silently=False
                )

            contact = Contact(name=data['name'], email=data['email'], subject=data['subject'], message=data['message'])
            contact.save()

            return Response({"message": "Message sent successfully"})

        except Exception:
            print_exc()
            return Response({"error": "Message failed to send"})