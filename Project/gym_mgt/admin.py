# Import necessary modules
from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import Membership, DietPlan, WorkoutPlan, DietPlanDetail, WorkoutPlanDetail, Shipment
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import CustomUser

class CustomUserAdmin(BaseUserAdmin):
    # Define fieldsets to include the custom image field
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'email', 'age', 'phone', 'gender', 'height', 'weight', 'image')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    # Add the custom image field to the list display
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'age', 'phone', 'gender', 'height', 'weight', 'image')


# Register the CustomUserAdmin with your CustomUser model
admin.site.register(CustomUser, CustomUserAdmin)

# Inline model admin for DietPlanDetail
class DietPlanDetailInline(admin.TabularInline):
    model = DietPlanDetail
    extra = 1
    fields = ('day_of_week', 'morning', 'afternoon', 'evening')

# Inline model admin for WorkoutPlanDetail
class WorkoutPlanDetailInline(admin.TabularInline):
    model = WorkoutPlanDetail
    extra = 1
    fields = ('day_of_week', 'type_of_workout','exercises', 'description')

# Register Membership model with admin site
@admin.register(Membership)
class MembershipAdmin(admin.ModelAdmin):
    # Define fields to be displayed in the list view
    list_display = ('trainee', 'start_date', 'end_date', 'membership_type')
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "trainee":
            # Allow trainee selection even without Membership records
            kwargs["queryset"] = get_user_model().objects.filter(groups__name='trainee')
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

# Register DietPlan model with admin site
@admin.register(DietPlan)
class DietPlanAdmin(admin.ModelAdmin):
    # Define fields to be displayed in the list view
    list_display = ('trainee', )
    # Add inline DietPlanDetail admin
    inlines = [DietPlanDetailInline]
    # Limit user dropdown menu choices to only those who are trainee
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "trainee":
            # Allow trainee selection even without Membership records
           kwargs["queryset"] = get_user_model().objects.filter(membership__isnull=False)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

# Register WorkoutPlan model with admin site
@admin.register(WorkoutPlan)
class WorkoutPlanAdmin(admin.ModelAdmin):
    # Define fields to be displayed in the list view
    list_display = ('trainee', 'start_date', 'end_date')
    # Add inline WorkoutPlanDetail admin
    inlines = [WorkoutPlanDetailInline]
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "trainee":
            # Allow trainee selection even without Membership records
            kwargs["queryset"] = get_user_model().objects.filter(membership__isnull=False)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)
    

@admin.register(Shipment)
class ShipmentAdmin(admin.ModelAdmin):
    list_display = ['user','name','phone_number','flat_block_no','pincode','address', 'state','city_district','locality','alternate_phone_number']
