```python
from django.db import models

class PositionAndContractLength(models.Model):
    position = models.CharField(max_length=200)
    contract_length = models.IntegerField()

    def __str__(self):
        return self.position
```