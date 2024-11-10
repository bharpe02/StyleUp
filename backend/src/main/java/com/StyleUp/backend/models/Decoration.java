package com.StyleUp.backend.models;

import jakarta.persistence.*;

@Entity
@Table (name = "decorations")
public class Decoration {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long DecorationId;

    @Column
    private Long fkRoomId;

    @Column
    private String searchLink;
    /* my current thinking is that each decoration object will just have a link to the Google search result.
    * maybe we can add an image too? not sure if that would work for every search*/



    public Decoration() {}

    public Decoration(String searchLink, Long fkRoomId) {
        this.searchLink = searchLink;
        this.fkRoomId = fkRoomId;
    }

    public Long getDec_id() {
        return DecorationId;
    }

    public void setDec_id(Long dec_id) {
        this.DecorationId = dec_id;
    }

    public String getSearchLink() {
        return searchLink;
    }

    public void setSearchLink(String searchLink) {
        this.searchLink = searchLink;
    }
}
