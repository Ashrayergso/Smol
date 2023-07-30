```python
from django.db import models
from .Ship import Ship
from .Crew import Crew

class ShipCrewAllowance(models.Model):
    ship = models.ForeignKey(Ship, on_delete=models.CASCADE)
    crew = models.ForeignKey(Crew, on_delete=models.CASCADE)
    allowance = models.IntegerField()

    class Meta:
        unique_together = ('ship', 'crew')

    def __str__(self):
        return f'{self.ship.name} - {self.crew.name}: {self.allowance}'
```