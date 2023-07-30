```python
from rest_framework import serializers
from backend.models import CertificateTypesAndExpiry

class CertificateTypesAndExpirySerializer(serializers.ModelSerializer):
    class Meta:
        model = CertificateTypesAndExpiry
        fields = ['id', 'certificate_type', 'expiry_date', 'crew_member']
```