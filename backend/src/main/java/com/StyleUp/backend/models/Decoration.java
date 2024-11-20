package com.StyleUp.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

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

    @Column
    private String description;

    @Column
    private String title;

    @Column
    private String image;

    public Decoration() {}

    public Decoration(String searchLink, Long fkRoomId, String description, String title, String image) {
        this.searchLink = searchLink;
        this.fkr = fkRoomId;
        this.description = description;
        this.title = title;
        this.image = image;
    }

    public Long getDec_id() {
        return decoration_id;
    }

    public void setDec_id(Long dec_id) {
        this.decoration_id = dec_id;
    }

    public Long getFkr() {
        return fkr;
    }

    public void setFkr(Long fkr) {
        this.fkr = fkr;
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
                ", description=" + description + '\'' +
                ", title=" + title + '\'' +
                ", image=" + image + '\'' +
                '}';
    }
}
