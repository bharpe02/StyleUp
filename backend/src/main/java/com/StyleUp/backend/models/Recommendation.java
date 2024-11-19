package com.StyleUp.backend.models;

public class Recommendation {

    private String name;
    private String searchLink;
    private String deliveryDate;

    public Recommendation(String name, String searchLink, String deliveryDate) {
        this.name = name;
        this.searchLink = searchLink;
        this.deliveryDate = deliveryDate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSearchLink() {
        return searchLink;
    }

    public void setSearchLink(String searchLink) {
        this.searchLink = searchLink;
    }

    public String getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(String deliveryDate) {
        this.deliveryDate = deliveryDate;
    }
}