package com.StyleUp.backend.models;

import jakarta.persistence.*;

@Entity
@Table (name = "decorations")
public class Decoration {
    @Id
    @Column(name="decoration_id")
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long decoration_id;

    @Column
    private Long fkr;

    @Column
    private String searchLink;
    /* my current thinking is that each decoration object will just have a link to the Google search result.
    * maybe we can add an image too? not sure if that would work for every search*/



    public Decoration() {}

    public Decoration(String searchLink, Long fkRoomId) {
        this.searchLink = searchLink;
        this.fkr = fkRoomId;
    }

    public Long getDec_id() {
        return decoration_id;
    }

    public void setDec_id(Long dec_id) {
        this.decoration_id = dec_id;
    }

    public String getSearchLink() {
        return searchLink;
    }

    public void setSearchLink(String searchLink) {
        this.searchLink = searchLink;
    }

    @Override
    public String toString() {
        return "Decoration{" +
                "DecorationId=" + decoration_id +
                ", fkr=" + fkr +
                ", searchLink='" + searchLink + '\'' +
                '}';
    }
}
