package com.StyleUp.backend.models;

import jakarta.persistence.*;

@Entity
@Table (name = "decorations")
public class Decoration {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long dec_id;

    @Column
    private String searchLink;
    /* my current thinking is that each decoration object will just have a link to the Google search result.
    * maybe we can add an image too? not sure if that would work for every search*/
}
