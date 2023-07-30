```python
from rest_framework import serializers
from backend.models import Assignment

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = ['id', 'crew', 'ship', 'start_date', 'end_date']
```