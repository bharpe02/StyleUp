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

/*
* EXAMPLE RESULT
* "items": [
    {
      "kind": "customsearch#result",
      "title": "The Danbury Mint Woodland Creatures Raccoon Family 1991 Amy ...",
      "htmlTitle": "The Danbury Mint Woodland Creatures Raccoon Family 1991 Amy ...",
      "link": "https://www.etsy.com/listing/1745058010/the-danbury-mint-woodland-creatures",
      "displayLink": "www.etsy.com",
      "snippet": "The \u003Cbr /\u003E Cottagecore Lover. The Plant Parent. The \u003Cbr /\u003E Plant Parent. Shop now ... Bedroom Furniture · Dining Room Furniture · Kids' Furniture · Living Room ...",
      "htmlSnippet": "The &lt;br /&gt; \u003Cb\u003ECottagecore\u003C/b\u003E Lover. The Plant Parent. The &lt;br /&gt; Plant Parent. Shop now ... Bedroom Furniture &middot; Dining Room Furniture &middot; Kids&#39; Furniture &middot; Living Room&nbsp;...",
      "formattedUrl": "https://www.etsy.com/listing/.../the-danbury-mint-woodland-creatures",
      "htmlFormattedUrl": "https://www.etsy.com/listing/.../the-danbury-mint-woodland-creatures",
      "pagemap": {
        "cse_thumbnail": [
          {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zsFv3ZCqTULtrsDNUJvmNXxzRYeLI4J1JXdbyZ_eWFS7Xs_jzf9oNxc&s",
            "width": "194",
            "height": "259"
          }
        ],
        "metatags": [
          {
            "twitter:app:url:iphone": "etsy://listing/1745058010?ref=TwitterProductCard",
            "twitter:app:id:googleplay": "com.etsy.android",
            "og:image": "https://i.etsystatic.com/15623743/r/il/3340fd/5872234021/il_1080xN.5872234021_9zd1.jpg",
            "twitter:card": "summary_large_image",
            "theme-color": "rgb(255, 255, 255)",
            "twitter:app:url:ipad": "etsy://listing/1745058010?ref=TwitterProductCard",
            "apple-mobile-web-app-title": "Etsy",
            "al:android:package": "com.etsy.android",
            "dist": "202411191731975613",
            "product:price:amount": "10.00",
            "twitter:app:name:googleplay": "Etsy",
            "twitter:app:id:iphone": "477128284",
            "al:ios:url": "etsy://listing/1745058010?ref=applinks_ios",
            "og:description": "This Collectible Plates item by FernvaleVintage has 5 favorites from Etsy shoppers. Ships from Philadelphia, PA. Listed on Nov 11, 2024",
            "al:ios:app_store_id": "477128284",
            "csrf_nonce": "3:1731998244:8prEW3N1AsYKmcR4kEyI4r129O3A:dbc829c0182cac1a66c2103e8535ab3eb78637c95e995d1384bac6fc4557dc42",
            "twitter:site": "@Etsy",
            "application-name": "Etsy",
            "msapplication-tilecolor": "#F1641E",
            "og:type": "product",
            "al:ios:app_name": "Etsy",
            "og:title": "The Danbury Mint Woodland Creatures Raccoon Family 1991 Amy Brackenbury Ceramic Wall Art Collectible Plate - Etsy",
            "twitter:app:id:ipad": "477128284",
            "pinterest": "nosearch",
            "uaid_nonce": "3:1731998244:YJ-BWeSGUuMxk8FBLhtv33kXM_7_:b0715c54c92cc0b8d86cc0c2e89921342acbe4f6bb0e1a063bc8ab3d4b5e2e62",
            "al:android:url": "etsy://listing/1745058010?ref=applinks_android",
            "fb:app_id": "89186614300",
            "twitter:app:url:googleplay": "etsy://listing/1745058010?ref=TwitterProductCard",
            "twitter:app:name:ipad": "Etsy",
            "viewport": "width=device-width, initial-scale=1.0",
            "product:price:currency": "USD",
            "css_dist_path": "/ac/sasquatch/css/",
            "og:url": "https://www.etsy.com/listing/1745058010/the-danbury-mint-woodland-creatures?utm_source=OpenGraph&utm_medium=PageTools&utm_campaign=Share",
            "twitter:app:name:iphone": "Etsy",
            "al:android:app_name": "Etsy"
          }
        ],
        "cse_image": [
          {
            "src": "https://i.etsystatic.com/15623743/r/il/3340fd/5872234021/il_1080xN.5872234021_9zd1.jpg"
          }
        ]
      }
    }
* */