from django.urls import path
from .views import ListingsView, ListingDetailView, SearchView

urlpatterns = [
    path('', ListingsView.as_view()),
    path('search', SearchView.as_view()),
    path('<slug>', ListingDetailView.as_view()),
]