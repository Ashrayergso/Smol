```python
from rest_framework import viewsets
from backend.models import CertificateTypesAndExpiry
from backend.serializers import CertificateTypesAndExpirySerializer

class CertificateTypesAndExpiryView(viewsets.ModelViewSet):
    queryset = CertificateTypesAndExpiry.objects.all()
    serializer_class = CertificateTypesAndExpirySerializer
```