from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('signup/',views.signup, name='signup'),
    path('login_view/', views.login_view, name='login'),
    path('trainee_dashboard/',views.trainee_dashboard,name='trainee_dashboard'),
    path('logout/', views.logout_view, name='logout'),
    path('workout_plan/', views.workout_plan_view, name='workout_plan'),  
    path('diet_plan/', views.diet_plan_view, name='diet_plan'), 
    path('store/', views.store_view, name='store'),
    path('store/checkout/', views.checkout_view, name='checkout'),
    path('order_confirmation', views.order_view, name='order_confirmation')
]
