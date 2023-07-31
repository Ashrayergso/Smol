
from django.db import models
from .Crew import Crew

class CertificateTypesAndExpiry(models.Model):
    crew = models.ForeignKey(Crew, on_delete=models.CASCADE)
    certificate_type = models.CharField(max_length=200)
    expiry_date = models.DateField()

    def __str__(self):
        return f'{self.certificate_type} for {self.crew.name} expires on {self.expiry_date}'
