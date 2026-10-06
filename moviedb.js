// Base de Datos Temporal para respaldar datos

const moviesDB = [
    {
        title: "El Viaje de Chihiro", 
        category: ["Anime", "Aventura"], 
        type: "Pelicula", 
        rating: 4.9, 
        img: "https://images.justwatch.com/poster/243968442/s718/el-viaje-de-chihiro.jpg" 
    },
    {
        title: "Titanic", 
        category: ["Romance", "Drama"], 
        type: "Pelicula", 
        rating: 4.7, 
        img: "https://m.media-amazon.com/images/M/MV5BNjQ4NGU5ZWEtMjM1My00MTcxLWIzYWMtN2MwM2E2MWYzODk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "The Boys", 
        category: ["Acción", "Comedia"], 
        type: "Serie", 
        rating: 4.8, 
        img: "https://m.media-amazon.com/images/M/MV5BMWJlN2U5MzItNjU4My00NTM2LWFjOWUtOWFiNjg3ZTMxZDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Matrix", 
        category: ["Sci-Fi", "Acción"], 
        type: "Pelicula", 
        rating: 4.9, 
        img: "https://pics.filmaffinity.com/Matrix-430409153-large.jpg" 
    },
    {
        title: "El Conjuro", 
        category: ["Terror"], 
        type: "Pelicula", 
        rating: 4.5, 
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEil91uWcWktClfvIvmV6qtU11ZipAlkALkCOXzyuqv0XH8vNgmE_YErlx8nKvxP2nO6VWaJOw8Rgvgwm6XjILiH2jrbY6tZAG3QCrI8eYOwoUVOKYxXRPdRAV82UOmAx9R9nOwalinXt0Dg/s1600/the-conjuring-poster.jpg" 
    },
    {
        title: "Todo a la vez en todas partes", 
        category: ["Sci-Fi", "Aventura"], 
        type: "Pelicula", 
        rating: 4.8, 
        img: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg" 
    },
    {
        title: "Goblin", 
        category: ["Romance", "Drama", "Fantasia"], 
        type: "Serie", 
        rating: 4.9, 
        img: "https://images.justwatch.com/poster/185481575/s718/goblin-el-solitario-ser-inmortal.jpg" 
    },
    {
        title: "The Office", 
        category: ["Comedia"], 
        type: "Serie", 
        rating: 4.7, 
        img: "https://upload.wikimedia.org/wikipedia/en/5/58/TheOffice_S7_DVD.jpg" 
    },
    {
        title: "Pájaros de Verano", 
        category: ["Drama", "Crimen"], 
        type: "Pelicula", 
        rating: 4.6, 
        img: "https://m.media-amazon.com/images/M/MV5BMmU4ODRkOGItNjJkNi00ZTRlLWFmZGQtZDE0ODljZTEzOWE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Coco", 
        category: ["Comedia", "Animación", "Familia"], 
        type: "Pelicula", 
        rating: 4.9, 
        img: "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg" 
    },
    {
        title: "Demon Slayer: Mugen Train", 
        category: ["Anime", "Acción"], 
        type: "Pelicula", 
        rating: 4.8, 
        img: "https://m.media-amazon.com/images/M/MV5BNzEzYjhkYTctMWNmZS00MTc5LWI4OWUtZjFkNzNkYTNkMTJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
   
    {
        title: "Five Nights at Freddy's", 
        category: ["Terror"], 
        type: "Pelicula", 
        rating: 4.2, 
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSVPivSEOPVmHn_Egmig4GtQdvv4pQiSXqO6_p9D_CyvH63jtoD" 
    },
    {
        
    },
    {
        title: "Bridgerton", 
        category: ["Romance", "Drama"], 
        type: "Serie", 
        rating: 4.3, 
        img: "https://m.media-amazon.com/images/M/MV5BYzc4NmIwNGMtNGIzNy00Nzg2LWFlNzItYzhmNjQ1NGUwNTg1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Avengers: Endgame", 
        category: ["Acción", "Sci-Fi"], 
        type: "Pelicula", 
        rating: 5.0, 
        img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" 
    },
    {
        title: "Breaking Bad", 
        category: ["Drama", "Crimen"], 
        type: "Serie", 
        rating: 4.9, 
        img: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg" 
    },
    {
        title: "Juraccic World: Renace", 
        category: ["Acción", "Sci-Fi"], 
        type: "Pelicula", 
        rating: 3.5, 
        img: "https://m.media-amazon.com/images/M/MV5BMGM3ZmI3NzQtNzU5Yi00ZWI1LTg3YTAtNmNmNWIyMWFjZTBkXkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "An Unexpected Christmas", 
        category: ["Comedia", "Romance"], 
        type: "Pelicula", 
        rating: 4.7, 
        img: "https://m.media-amazon.com/images/M/MV5BZGRmMjM5NGMtYmM4NC00N2M4LThjZGMtMzRiMjM1ODk0MDk1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Five Nights at Freddy’s 2", 
        category: ["Terror"], 
        type: "Pelicula", 
        rating: 2.3, 
        img: "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/1/6/7/4/94761-1-esl-CO/58941e96a5c7-poster480_670.jpg" 
    },
    {
        title: "Hot Fuzz (Super Policías)", 
        category: ["Comedia", "Acción"], 
        type: "Pelicula", 
        rating: 4.3, 
        img: "https://m.media-amazon.com/images/M/MV5BYjFkZTkzZTQtNjM1ZS00M2EyLWE3MTAtMmY5Yzk0NTc0NDc3XkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "The Shawshank Redemption", 
        category: ["Drama"], 
        type: "Pelicula", 
        rating: 4.9, 
        img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668084984/the-shawshank-redemption-9781668084984_lg.jpg" 
    },
    {
        title: "El Padrino", 
        category: ["Drama", "Crimen"], 
        type: "Pelicula", 
        rating: 4.4, 
        img: "https://pics.filmaffinity.com/El_padrino-590289523-large.jpg" 
    },
    {
        title: "María, llena eres de gracia", 
        category: ["Drama"], 
        type: "Pelicula", 
        rating: 4.9, 
        img: "https://m.media-amazon.com/images/M/MV5BYzc2MjFhNDMtNTY2Ny00ZWQ5LWIxZmEtZjY4MjAxYThmMTdiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Parque Jurásico", 
        category: ["Sci-Fi", "Aventura"], 
        type: "Pelicula", 
        rating: 5.0, 
        img: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg" 
    },
    {
        title: "Inception (El Origen)", 
        category: ["Sci-Fi", "Acción"], 
        type: "Pelicula", 
        rating: 4.7, 
        img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Forrest Gump", 
        category: ["Drama", "Romance"], 
        type: "Pelicula", 
        rating: 4.8, 
        img: "https://images.justwatch.com/poster/167978449/s718/forrest-gump.jpg" 
    },
    {
        title: "Your Name", 
        category: ["Anime", "Romance"], 
        type: "Pelicula", 
        rating: 4.2, 
        img: "https://m.media-amazon.com/images/M/MV5BMTIyNzFjNzItZmQ1MC00NzhjLThmMzYtZjRhN2Y3MmM2OGQyXkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "Akira", 
        category: ["Anime", "Sci-Fi"], 
        type: "Pelicula", 
        rating: 5.0, 
        img: "https://pics.filmaffinity.com/akira-262742931-large.jpg" 
    },
    {
        title: "La Princesa Mononoke", 
        category: ["Anime", "Aventura"], 
        type: "Pelicula", 
        rating: 4.9, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_D9w0cW8mDvWt_2JwJWhRIyek0jKZHJfHA&s" 
    },
    {
        title: "A Silent Voice", 
        category: ["Anime", "Drama"], 
        type: "Pelicula", 
        rating: 4.8, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JvxT1_dQKD3QZmpSgP0DyL8iIlEjSy8vjw&s" 
    },
    {
        title: "El abrazo de la serpiente", 
        category: ["Drama"], 
        type: "Pelicula", 
        rating: 4.8, 
        img: "https://www.proimagenescolombia.com/photos/57150_3219__imagen__.jpg" 
    },
    {
        title: "Monos", 
        category: ["Drama", "Thriller"], 
        type: "Pelicula", 
        rating: 4.7, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwoShyAdNooPdSLFnVZYa6HuNf3OQp6eaORQ&s" 
    },
    {
        title: "La vendedora de rosas", 
        category: ["Drama"], 
        type: "Pelicula", 
        rating: 4.3, 
        img: "https://www.proimagenescolombia.com/photos/57150_993__imagen__.jpg" 
    },
    {
        title: "Gente de Bien", 
        category: ["Drama"], 
        type: "Pelicula", 
        rating: 4.5, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4ktY_pmnFm2j_oDhdkeFvI75kVaZiabS-g&s" 
    },
    {
        title: "Crash Landing on You", 
        category: ["Romance", "Drama"], 
        type: "Serie", 
        rating: 4.9, 
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHg66eVMtcmZXYUo7EUukmMXO25rfi1a9_4AR08iYjLfeTjQ5qQOgsZwxXr1UOyk-y4lX3gyARHAHCbUqDvYa9aoD7PoB_ZhjrSwez1nPOtMyR00Dz7bnMKdq_4rf-2dG98eqZQU59jUt3/s1600/crash-landing-on-you0.png" 
    },
    {
        title: "Kingdom", 
        category: ["Acción", "Terror"], 
        type: "Serie", 
        rating: 4.4, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnN2Ly6P-0ebHdJti4ZALKDfCVZc2_to3DQ&s" 
    },
    {
        title: "Descendants of the Sun", 
        category: ["Romance", "Acción"], 
        type: "Serie", 
        rating: 4.3, 
        img: "https://upload.wikimedia.org/wikipedia/en/6/6e/DescendantsoftheSun.jpg" 
    },
    {
        title: "Vincenzo", 
        category: ["Acción", "Comedia"], 
        type: "Serie", 
        rating: 3.3, 
        img: "https://m.media-amazon.com/images/M/MV5BNjA1YmJiNTMtMDc4OC00ZjlkLTgyMjctYzRmMWJhMmZhMjkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "It's Okay to Not Be Okay", 
        category: ["Romance", "Drama"], 
        type: "Serie", 
        rating: 3.7, 
        img: "https://m.media-amazon.com/images/M/MV5BNWJhMDNjMWUtMWM5NS00MGZlLWI2MWQtODMxYjZiYmFlZjgzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Invincible", 
        category: ["Acción", "Animación"], 
        type: "Serie", 
        rating: 4.7, 
        img: "https://m.media-amazon.com/images/M/MV5BZjE4ZDU4ZjMtZjliYS00M2ZmLThkNTItN2U3MmJjOGU0NmIxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Daredevil", 
        category: ["Acción", "Crimen"], 
        type: "Serie", 
        rating: 4.5, 
        img: "https://lumiere-a.akamaihd.net/v1/images/image003_86eb2e3f.jpeg?region=0,0,607,867" 
    },
    {
        title: "Doom Patrol", 
        category: ["Comedia", "Sci-Fi"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://es.web.img3.acsta.net/pictures/19/02/12/11/56/4356169.jpg" 
    },
    {
        title: "Loki", 
        category: ["Comedia", "Sci-Fi"], 
        type: "Serie", 
        rating: 4.5, 
        img: "https://es.web.img2.acsta.net/pictures/21/05/12/16/27/2587198.jpg" 
    },
    {
        title: "The Umbrella Academy", 
        category: ["Sci-Fi", "Acción"], 
        type: "Serie", 
        rating: 4.5, 
        img: "https://m.media-amazon.com/images/M/MV5BMzlmMmIxODItYzBjNC00YjMwLWIwOTAtNzVlMTBlNTNkMjZjXkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "El exorcista", 
        category: ["Terror"], 
        type: "Pelicula", 
        rating: 4.5, 
        img: "https://m.media-amazon.com/images/M/MV5BZjg3YjE4ZjAtYTdmYS00ZTBkLWE1ZjgtNzAzODUwNzRiYjlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "The babadook", 
        category: ["Terror"], 
        type: "Pelicula", 
        rating: 4.3, 
        img: "https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Scream 2", 
        category: ["Terror"], 
        type: "Pelicula", 
        rating: 4.1, 
        img: "https://m.media-amazon.com/images/M/MV5BODE5YWJkMDMtN2ZiNC00MjI5LTkxYTgtOTkyZjUwMjU0YThiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Outlander", 
        category: ["Romance", "Fantasia"], 
        type: "Serie", 
        rating: 4.8, 
        img: "https://images.justwatch.com/poster/34058043/s718/outlander.jpg" 
    },
    {
        title: "Normal People", 
        category: ["Romance", "Drama"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://images.justwatch.com/poster/176978990/s718/normal-people.jpg" 
    },
    {
        title: "You Are the Worst", 
        category: ["Romance", "Comedia"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://m.media-amazon.com/images/M/MV5BMTU4OTM5OTM2NV5BMl5BanBnXkFtZTgwNDc3MDg0MzI@._V1_.jpg" 
    },
    {
        title: "Pachinko", 
        category: ["Romance", "Drama"], 
        type: "Serie", 
        rating: 4.3, 
        img: "https://m.media-amazon.com/images/M/MV5BN2QwMTgyZTAtOTM4MS00OGRhLWIzNjQtZmQ3Yzc5NmNiYzhlXkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "One Day (Siempre el mismo día)", 
        category: ["Romance", "Drama"], 
        type: "Serie", 
        rating: 4.4, 
        img: "https://images.justwatch.com/poster/250772645/s718/one-day-siempre-el-mismo-dia.jpg" 
    },
    {
        title: "Friends", 
        category: ["Comedia"], 
        type: "Serie", 
        rating: 4.9, 
        img: "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Brooklyn Nine-Nine", 
        category: ["Comedia", "Crimen"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://m.media-amazon.com/images/M/MV5BNzBiODQxZTUtNjc0MC00Yzc1LThmYTMtN2YwYTU3NjgxMmI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Seinfeld", 
        category: ["Comedia"], 
        type: "Serie", 
        rating: 4.5, 
        img: "https://m.media-amazon.com/images/M/MV5BMmRjNjZjN2ItN2FkYi00ZDg0LWExN2EtMTU2ODUwNWU1M2NhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Parks and Recreation", 
        category: ["Comedia"], 
        type: "Serie", 
        rating: 4.5, 
        img: "https://m.media-amazon.com/images/M/MV5BNDlhMzAwNTAtNTk2NS00MTdkLWE3ZWYtMDU0MTFiYmU2ZTc0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Ted Lasso", 
        category: ["Comedia", "Drama"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://m.media-amazon.com/images/M/MV5BZmI3YWVhM2UtNDZjMC00YTIzLWI2NGUtZWIxODZkZjVmYTg1XkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "paddington", 
        category: ["Comedia", "Familia"], 
        type: "Pelicula", 
        rating: 4.8, 
        img: "https://m.media-amazon.com/images/I/81ajUVs6ddL.jpg" 
    },
    {
        title: "Spider-Man: Un Nuevo Universo (Spider-Verse)", 
        category: ["Comedia", "Acción", "Animación"], 
        type: "Pelicula", 
        rating: 4.9, 
        img: "https://m.media-amazon.com/images/M/MV5BOTNlZDY2NzktNDQwMS00ZWE4LWE3MmMtNGUzZTJhMmQ0NGI1XkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "El Rey León (The Lion King)", 
        category: ["Comedia", "Animación"], 
        type: "Pelicula", 
        rating: 4.9, 
        img: "https://m.media-amazon.com/images/M/MV5BNjExYTQwY2EtMDRkYi00ZWIzLTkwZDUtYjVmODYxMDUwNDI5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Harry Potter 1", 
        category: ["Comedia", "Fantasia"], 
        type: "Pelicula", 
        rating: 4.8, 
        img: "https://play-lh.googleusercontent.com/8iZjDOMW5B4Xuk1Qv8VtrAy-TYGRX9_YOcvoPeSLbO1Vs78SQN71aTpFH2jnFO8RQnU" 
    },
    {
        title: "Supermascotas", 
        category: ["Comedia", "Animación"], 
        type: "Pelicula", 
        rating: 4.4, 
        img: "https://es.web.img3.acsta.net/pictures/22/06/08/14/52/2247090.jpg" 
    },
    {
        title: "Sonic 3: la película", 
        category: ["Comedia", "Acción"], 
        type: "Pelicula", 
        rating: 4.8, 
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSu8nsDSE6dU7T3vTQShr0OgDHiCZSetzqGfkwV46_RphV-NogS" 
    },
    {
        title: "Stranger Things", 
        category: ["Sci-Fi", "Terror"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://pics.filmaffinity.com/stranger_things-875025085-large.jpg" 
    },
    {
        title: "El Demoledor", 
        category: ["Sci-Fi", "Acción"], 
        type: "Pelicula", 
        rating: 4.6, 
        img: "https://m.media-amazon.com/images/M/MV5BNWY3ZThmN2QtMzVkNS00MjczLTllNDQtOGEwN2M0ZTFkMWMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Sonic: la película", 
        category: ["Comedia", "Acción"], 
        type: "Pelicula", 
        rating: 4.7, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTiSbcfDZzTT0iEYYtQwedcnj-w1nd8BNsDQ&s" 
    },
    {
        title: "Superman (2025)", 
        category: ["Acción", "Sci-Fi"], 
        type: "Pelicula", 
        rating: 4.6, 
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5kpHGfBNwXEl1mnr2LkSRjRIe1oqKe5VxbbVk42niymTQVzYR" 
    },
    {
        title: "Mi Villano Favorito 4", 
        category: ["Comedia", "Animación"], 
        type: "Pelicula", 
        rating: 3.1, 
        img: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/despicable-me-4/images/regions/us/onesheet.jpg" 
    },
    {
        title: "Alien: Romulus", 
        category: ["Terror", "Sci-Fi"], 
        type: "Pelicula", 
        rating: 4.3, 
        img: "https://m.media-amazon.com/images/M/MV5BZmViMjcyYzMtMzdmYi00MjVmLWFhYjQtN2U1ZTU0YWIzNDhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Misión imposible: sentencia mortal Parte 2", 
        category: ["Acción", "Thriller"], 
        type: "Pelicula", 
        rating: 4.7, 
        img: "https://m.media-amazon.com/images/S/pv-target-images/f5af184404f22183d9511e2baff600f18d32277ed826ff23a815a9129d3c8f2b.jpg" 
    },
    {
        title: "Misión imposible: sentencia mortal Parte 1", 
        category: ["Acción", "Thriller"], 
        type: "Pelicula", 
        rating: 4.8, 
        img: "https://pics.filmaffinity.com/Misiaon_imposible_Sentencia_mortal_Parte_1-902615661-large.jpg" 
    },
    {
        title: "Mad Max: Furia en el Camino", 
        category: ["Acción", "Sci-Fi"], 
        type: "Pelicula", 
        rating: 4.9, 
        img: "https://m.media-amazon.com/images/M/MV5BODE2NWUwYmYtYmNmZi00OTVjLTgxMzEtZWYyMWVmODg5MmM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "John Wick 1", 
        category: ["Acción", "Crimen"], 
        type: "Pelicula", 
        rating: 5.0, 
        img: "https://es.web.img3.acsta.net/pictures/14/10/01/14/18/135831.jpg" 
    },
    {
        title: "Duro de Matar", 
        category: ["Acción", "Thriller"], 
        type: "Pelicula", 
        rating: 4.9, 
        img: "https://m.media-amazon.com/images/M/MV5BYzliYWVmYjEtYWYyMi00MDBlLTk5MjMtYTQ1OWQ2MzVmMzRiXkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "Atómica (Atomic Blonde)", 
        category: ["Acción", "Thriller"], 
        type: "Pelicula", 
        rating: 4.1, 
        img: "https://pics.filmaffinity.com/atomic_blonde-338199948-msmall.jpg" 
    },
    {
        title: "Memento", 
        category: ["Drama", "Thriller"], 
        type: "Pelicula", 
        rating: 4.4, 
        img: "https://m.media-amazon.com/images/M/MV5BMGQ3Y2Q4NjktN2E4Ny00Y2Q2LTliZDUtZTNiNjRhY2I0NGIyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "La isla siniestra", 
        category: ["Drama", "Thriller"], 
        type: "Pelicula", 
        rating: 4.5, 
        img: "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Sospechosos Habituales (The Usual Suspects)", 
        category: ["Drama", "Crimen"], 
        type: "Pelicula", 
        rating: 4.7, 
        img: "https://pics.filmaffinity.com/the_usual_suspects-480334080-large.jpg" 
    },
    {
        title: "Prisioneros (Prisoners)", 
        category: ["Drama", "Thriller"], 
        type: "Pelicula", 
        rating: 4.3, 
        img: "https://pics.filmaffinity.com/prisoners-721879978-large.jpg" 
    },
    {
        title: "Parásitos (Parasite)", 
        category: ["Drama", "Thriller"], 
        type: "Pelicula", 
        rating: 4.3, 
        img: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "Mi pobre angelito", 
        category: ["Comedia", "Familia"], 
        type: "Pelicula", 
        rating: 5.0, 
        img: "https://images.justwatch.com/poster/101468484/s718/home-alone.jpg" 
    },
    {
        title: "Seven (Se7en)", 
        category: ["Drama", "Crimen"], 
        type: "Pelicula", 
        rating: 4.6, 
        img: "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "paddington 2", 
        category: ["Comedia", "Familia"], 
        type: "Pelicula", 
        rating: 4.4, 
        img: "https://play-lh.googleusercontent.com/SYQIY9b_piP5m81pbctoaf0-Kq8fNUaZCFnfBhw5xAY07wf0dfzLYL91B2spILovasI" 
    },
    {
        title: "Mrs. Doubtfire", 
        category: ["Comedia", "Drama"], 
        type: "Pelicula", 
        rating: 4.4, 
        img: "https://play-lh.googleusercontent.com/nMbEfiECATfTEUBfEZdkBh4DkAsLFOT6TnxmPmsT1NtwmDJNxIuk_4lkizq6fR0oYuV-" 
    },
    {
        title: "LLuvia de Hamburguesas", 
        category: ["Comedia", "Animación"], 
        type: "Pelicula", 
        rating: 4.8, 
        img: "https://play-lh.googleusercontent.com/rSOdArYGNXxvDyDhtFU6G0XhLU_hh3A9JrJGYv2K_4XkJyu_rT4Z69audTT8gpMeNwYG" 
    },
    {
        title: "School of Rock", 
        category: ["Comedia", "Musica"], 
        type: "Pelicula", 
        rating: 4.2, 
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/School_of_Rock_Poster.jpg/250px-School_of_Rock_Poster.jpg" 
    },
    {
        title: "Viernes de locos 1", 
        category: ["Comedia", "Fantasia"], 
        type: "Pelicula", 
        rating: 4.4, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl1tX_N1sMg3mG1odFCGvt6Snl3LkzQWBIJfn8Uzy7ytquLHm-YQ0XxtFB8oN2f_1jgUG9SHPDMSVIs_GK4H35TdXyN3Yqy7KUraFdw&s" 
    },
    {
        title: "La la land", 
        category: ["Romance", "Musica"], 
        type: "Pelicula", 
        rating: 4.7, 
        img: "https://es.web.img3.acsta.net/pictures/16/11/30/17/44/581119.jpg" 
    },
    {
        title: "Diario de una Pasion", 
        category: ["Romance", "Drama"], 
        type: "Pelicula", 
        rating: 4.7, 
        img: "https://m.media-amazon.com/images/M/MV5BM2RiMzcxYmYtNzQ3MC00NTQ4LWE0ZjktNGUwODI1MzhjNDNkXkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "Cuando Harry Conoció a Sally...", 
        category: ["Romance", "Comedia"], 
        type: "Pelicula", 
        rating: 4.6, 
        img: "https://pics.filmaffinity.com/Cuando_Harry_encontrao_a_Sally-141523594-large.jpg" 
    },
    {
        title: "Tienes un E-mail", 
        category: ["Romance", "Comedia"], 
        type: "Pelicula", 
        rating: 4.6, 
        img: "https://m.media-amazon.com/images/S/pv-target-images/b3dfc344ea3b0a304b4facb395c95ae74c1f0ac822df0efa9b172a8d14b7149b.jpg" 
    },
    {
        title: "El descanso", 
        category: ["Romance", "Comedia"], 
        type: "Pelicula", 
        rating: 4.4, 
        img: "https://play-lh.googleusercontent.com/OKqE0-LBAlovaCt3T4sWVe-x18gG5NAwq5BT02rMKZwwFmrxlSj8UxqS2ahKcPGKx70" 
    },
    {
        title: "Nace una estrella", 
        category: ["Romance", "Musica"], 
        type: "Pelicula", 
        rating: 4.7, 
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRh0aFV7EhhgIZApi3_HQShNXb8oRTKlAcVnKjOFS1oH-HHcOn5" 
    },
    {
        title: "Batman: el caballero de la noche", 
        category: ["Acción", "Crimen"], 
        type: "Pelicula", 
        rating: 4.9, 
        img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Logan", 
        category: ["Acción", "Drama"], 
        type: "Pelicula", 
        rating: 4.8, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0os_QU_VaF9RsJ7-rTrx72wyuAEZHCiPtg&s" 
    },
    {
        title: "Guardianes de la Galaxia (Vol. 1)", 
        category: ["Acción", "Sci-Fi"], 
        type: "Pelicula", 
        rating: 4.7, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkY98Oni1aF8I-pm1SFREHvjcmzROLt1CQAA&s" 
    },
    {
        title: "Spider-man Homecoming", 
        category: ["Acción", "Comedia"], 
        type: "Pelicula", 
        rating: 4.5, 
        img: "https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_.jpg" 
    },
    {
        title: "Succession", 
        category: ["Comedia", "Drama"], 
        type: "Serie", 
        rating: 4.3, 
        img: "https://m.media-amazon.com/images/M/MV5BYTY4YTVkY2QtMjRmOS00YzliLWIxOWQtMTdkOTVkN2UzODNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Black Mirror", 
        category: ["Sci-Fi", "Drama"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://m.media-amazon.com/images/M/MV5BMGRjZDBjODMtMWQ1Zi00MWRkLTk5YTMtMDU1NTNkMzhkM2QwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Juego de Tronos", 
        category: ["Acción", "Drama"], 
        type: "Serie", 
        rating: 4.8, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnb_D6lfcgorFzKgDZpz1BhP4bUq4nurUy1w&s" 
    },
    {
        title: "Alien: Earth", 
        category: ["Terror", "Sci-Fi"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://m.media-amazon.com/images/M/MV5BOGIyNGRiNzgtOWQxZC00YzJmLThlZTYtYTMyMDk0YWZjMTk5XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg" 
    },
    {
        title: "The Crown", 
        category: ["Drama", "Historia"], 
        type: "Serie", 
        rating: 4.2, 
        img: "https://resizing.flixster.com/aX9Yz5sNV2WpBA5CoENzIl9RbTM=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjI2NTU1OS53ZWJw" 
    },
    {
        title: "Jurassic World: Campamento Cretácico", 
        category: ["Acción", "Animación"], 
        type: "Serie", 
        rating: 4.4, 
        img: "https://m.media-amazon.com/images/M/MV5BMTg1MDFhY2ItNjdlMi00N2RhLThjMTQtNDQ3M2JjNDRiMTlhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Severance", 
        category: ["Acción", "Sci-Fi"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "The Witcher", 
        category: ["Acción", "Fantasia"], 
        type: "Serie", 
        rating: 4.8, 
        img: "https://es.web.img2.acsta.net/pictures/19/11/22/09/33/5060052.jpg" 
    },
    {
        title: "Monsters at Work", 
        category: ["Comedia", "Animación"], 
        type: "Serie", 
        rating: 4.2, 
        img: "https://m.media-amazon.com/images/M/MV5BYzJhY2YzYmMtNDgwZi00ZjEyLTk2ODAtZDE1YzU3MTRjNTYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Sherlock", 
        category: ["Acción", "Crimen"], 
        type: "Serie", 
        rating: 4.7, 
        img: "https://pics.filmaffinity.com/sherlock-635342236-large.jpg" 
    },
    {
        title: "Superman y Lois", 
        category: ["Acción", "Sci-Fi"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://images.justwatch.com/poster/304409221/s718/superman-y-lois.jpg" 
    },
    {
        title: "Community", 
        category: ["Comedia"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://es.web.img3.acsta.net/pictures/14/02/25/13/48/354317.jpg" 
    },
    {
        title: "Jack Ryan", 
        category: ["Acción", "Thriller"], 
        type: "Serie", 
        rating: 4.9, 
        img: "https://m.media-amazon.com/images/M/MV5BNGYxNzgzNTQtY2U0OC00NzU2LTgxZmYtNmZkMmVlMjgyMzM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "La Casa de Papel", 
        category: ["Acción", "Crimen"], 
        type: "Serie", 
        rating: 4.9, 
        img: "https://m.media-amazon.com/images/M/MV5BZDI0Zjk2NjMtOGRhMy00YzkyLWIwMzgtYmNiZDczM2IzOTAzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "The Mandalorian", 
        category: ["Acción", "Sci-Fi"], 
        type: "Serie", 
        rating: 4.7, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfcFcNLClcwsPKn92fLnrpnnGqurbygVpAuugIVUfJNY7HzmMK9JW1xGeqW8bSUYezd9GOq8CIdYINNzo60AS4o1vfh-rL3dYfS2XtZg&s=10" 
    },
    {
        title: "Peaky Blinders", 
        category: ["Drama", "Crimen"], 
        type: "Serie", 
        rating: 4.5, 
        img: "https://m.media-amazon.com/images/M/MV5BOGM0NGY3ZmItOGE2ZC00OWIxLTk0N2EtZWY4Yzg3ZDlhNGI3XkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "Vikingos", 
        category: ["Acción", "Drama"], 
        type: "Serie", 
        rating: 3.5, 
        img: "https://images.justwatch.com/poster/331747916/s332/temporada-1" 
    },
    {
        title: "FUBAR", 
        category: ["Acción", "Comedia"], 
        type: "Serie", 
        rating: 4.0, 
        img: "https://m.media-amazon.com/images/M/MV5BNWJkMGJlNjEtOGE0MC00ZWE0LTkwMGQtM2ZhMjQ1ZWNlN2I0XkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "Warrior", 
        category: ["Acción", "Drama"], 
        type: "Serie", 
        rating: 4.4, 
        img: "https://m.media-amazon.com/images/M/MV5BMzJmOTAwNTAtZWM3NS00YWQwLWJmYzItN2UxOTlhNThiYTc3XkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "Gangs of London", 
        category: ["Drama", "Crimen"], 
        type: "Serie", 
        rating: 4.4, 
        img: "https://m.media-amazon.com/images/M/MV5BODU1MmNiNWEtODJjMy00ZTRlLWFkZTctYzViNjBhOTM1OGIxXkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "Ozark", 
        category: ["Drama", "Crimen"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://m.media-amazon.com/images/M/MV5BZDk1ZTdjOWItNTJmYS00MGIzLThmY2ItZWNiOGY5MzJlNTA5XkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "The Queen's Gambit", 
        category: ["Drama"], 
        type: "Serie", 
        rating: 4.1, 
        img: "https://upload.wikimedia.org/wikipedia/en/1/12/The_Queen%27s_Gambit_%28miniseries%29.png" 
    },
    {
        title: "True Detective", 
        category: ["Drama", "Crimen"], 
        type: "Serie", 
        rating: 4.4, 
        img: "https://m.media-amazon.com/images/M/MV5BYjgwYzA1NWMtNDYyZi00ZGQyLWI5NTktMDYwZjE2OTIwZWEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "The Sinner", 
        category: ["Drama", "Thriller"], 
        type: "Serie", 
        rating: 3.9, 
        img: "https://m.media-amazon.com/images/M/MV5BMTRkNGZlMjUtZGVhZi00YjgzLTgwZmMtMGVlZTc4OGUzODk1XkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "Mindhunter", 
        category: ["Drama", "Crimen"], 
        type: "Serie", 
        rating: 4.1, 
        img: "https://es.web.img3.acsta.net/pictures/19/08/07/17/01/2286697.jpg" 
    },
    {
        title: "Percy Jackson y los Dioses del Olimpo", 
        category: ["Comedia", "Aventura"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://www.penguinlibros.com/co/1703413/percy-jackson-y-los-dioses-del-olimpo-la-serie-completa.jpg" 
    },
    {
        title: "Modern Family", 
        category: ["Comedia"], 
        type: "Serie", 
        rating: 4.8, 
        img: "https://pics.filmaffinity.com/modern_family-267543706-large.jpg" 
    },
    {
        title: "Avatar: La leyenda de Aang", 
        category: ["Comedia", "Animación"], 
        type: "Serie", 
        rating: 4.9, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2tpYqTPshF6ztKywddYtQaptC0zClJ6PjQ&s" 
    },
    {
        title: "Una serie de eventos desafortunados", 
        category: ["Comedia", "Aventura"], 
        type: "Serie", 
        rating: 4.4, 
        img: "https://pics.filmaffinity.com/lemony_snicket_s_a_series_of_unfortunate_events-182993793-large.jpg" 
    },
    {
        title: "Bluey", 
        category: ["Comedia", "Animación", "Familia"], 
        type: "Serie", 
        rating: 5.0, 
        img: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/r9YAAOSwK19ka3DI/$_57.JPG?set_id=8800005007" 
    },
    {
        title: "The Good Place", 
        category: ["Comedia", "Fantasia"], 
        type: "Serie", 
        rating: 4.2, 
        img: "https://m.media-amazon.com/images/M/MV5BMTgzMzAyOTg4Ml5BMl5BanBnXkFtZTgwMjA0Mjk0OTE@._V1_.jpg" 
    },
    {
        title: "La maldición de Hill House", 
        category: ["Terror", "Drama"], 
        type: "Serie", 
        rating: 2.2, 
        img: "https://m.media-amazon.com/images/M/MV5BOThhN2M3ZjctMGRiNi00NDIwLWI5NjktMGRmZTMxMzc5MDE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "American Horror Story (Antología)", 
        category: ["Terror", "Drama"], 
        type: "Serie", 
        rating: 4.5, 
        img: "https://pbs.twimg.com/media/FVy3f2RWIAELgSs.jpg" 
    },
    {
        title: "Midnight Mass (Misa de Medianoche)", 
        category: ["Terror", "Drama"], 
        type: "Serie", 
        rating: 4.2, 
        img: "https://pics.filmaffinity.com/midnight_mass-383808751-large.jpg" 
    },
    {
        title: "The Terror", 
        category: ["Terror", "Drama"], 
        type: "Serie", 
        rating: 3.4, 
        img: "https://m.media-amazon.com/images/M/MV5BNTUxNzI1MzcwN15BMl5BanBnXkFtZTgwMjA1MTg5NDM@._V1_.jpg" 
    },
    {
        title: "Channel Zero", 
        category: ["Terror"], 
        type: "Serie", 
        rating: 4.0, 
        img: "https://es.web.img3.acsta.net/pictures/16/09/07/15/33/585649.jpg" 
    },
    {
        title: "Dark", 
        category: ["Terror", "Sci-Fi"], 
        type: "Serie", 
        rating: 4.7, 
        img: "https://es.web.img3.acsta.net/pictures/17/11/10/12/27/3064798.jpg" 
    },
    {
        title: "La Esclava Isaura (Brasil)", 
        category: ["Romance", "Drama"], 
        type: "Serie", 
        rating: 4.9, 
        img: "https://images.vix.com/prd/videos/video:mcp:4539154/c3f336e1c1f63fc9d67363b3e1393578" 
    },
    {
        title: "Yo soy Betty, la fea (Colombia)", 
        category: ["Romance", "Comedia"], 
        type: "Serie", 
        rating: 5.0, 
        img: "https://m.media-amazon.com/images/M/MV5BYjhmNjYwNGEtYmNhZi00YzBmLThjNTMtOTAyNGJjNzc5YmJiXkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "Los Ricos También Lloran (México)", 
        category: ["Romance", "Drama"], 
        type: "Serie", 
        rating: 4.9, 
        img: "https://upload.wikimedia.org/wikipedia/en/a/a2/Los_ricos_tambi%C3%A9n_lloran_2022_series_poster.jpeg" 
    },
    {
        title: "Kassandra (Venezuela)", 
        category: ["Romance", "Drama"], 
        type: "Serie", 
        rating: 5.0, 
        img: "https://m.media-amazon.com/images/M/MV5BMTIxYTVlYmMtZTViOC00YjI3LTg5YzEtNWMzMDQ3ZGUxY2FkXkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "Fatmagül (Turquia)", 
        category: ["Romance", "Drama"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://m.media-amazon.com/images/M/MV5BNzVmMDAxOTYtYzQwMi00ZTZmLTgwY2UtNTQxN2UwY2NjMGQwXkEyXkFqcGc@._V1_.jpg" 
    },
    {
        title: "La Gloria (Corea del Sur)", 
        category: ["Romance", "Thriller"], 
        type: "Serie", 
        rating: 4.7, 
        img: "https://es.web.img3.acsta.net/pictures/23/03/16/21/34/5374988.jpg" 
    },
    {
        title: "Café, con aroma de mujer (1994)", 
        category: ["Romance", "Drama"], 
        type: "Serie", 
        rating: 4.9, 
        img: "https://es.web.img2.acsta.net/pictures/17/05/04/19/13/462204.jpg" 
    },
    {
        title: "Pasión de Gavilanes (2003)", 
        category: ["Romance", "Drama"], 
        type: "Serie", 
        rating: 5.0, 
        img: "https://es.web.img3.acsta.net/pictures/14/07/30/13/44/020246.jpg" 
    },
    {
        title: "Pedro el Escamoso (2001)", 
        category: ["Romance", "Comedia"], 
        type: "Serie", 
        rating: 5.0, 
        img: "https://m.media-amazon.com/images/M/MV5BMjE4NzAwODM3MV5BMl5BanBnXkFtZTcwMDM5MzkyMQ@@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Escobar, el Patrón del Mal (2012)", 
        category: ["Drama", "Crimen"], 
        type: "Serie", 
        rating: 4.9, 
        img: "https://m.media-amazon.com/images/M/MV5BNTdmZjEyMzktNGMzNS00ZWMyLTljNGMtOTA1ZTNlMzkwZDk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "La Reina del Flow (2018)", 
        category: ["Drama", "Romance"], 
        type: "Serie", 
        rating: 4.8, 
        img: "https://pics.filmaffinity.com/la_reina_del_flow-223343429-large.jpg" 
    },
    {
        title: "Dragon Ball Z", 
        category: ["Anime", "Acción"], 
        type: "Serie", 
        rating: 4.9, 
        img: "https://preview.redd.it/was-dragon-ball-z-good-or-bad-v0-z9w9byr2d6pd1.png?auto=webp&s=511b035e8b5d32e6287d3cca9a94b8b16a7ef262" 
    },
    {
        title: "One Piece", 
        category: ["Anime", "Aventura"], 
        type: "Serie", 
        rating: 4.5, 
        img: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "Jujutsu Kaisen", 
        category: ["Anime", "Acción"], 
        type: "Serie", 
        rating: 4.6, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nDDeLEOH2BhPjzrumPmtr8q_9DoscU-S5g&s" 
    },
    {
        title: "Attack on Titan", 
        category: ["Anime", "Acción"], 
        type: "Serie", 
        rating: 4.5, 
        img: "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    {
        title: "One-Punch Man", 
        category: ["Anime", "Comedia"], 
        type: "Serie", 
        rating: 4.8, 
        img: "https://external-preview.redd.it/one-punch-man-season-3-new-visual-v0-bsQ6cFiCslO3HDdsPwudD53YOvchCFUAzjz6ZI666o8.jpg?auto=webp&s=1cb8ec346662bce212c6d81b390c23dfeadca033" 
    },
    {
        title: "Naruto", 
        category: ["Anime", "Acción"], 
        type: "Serie", 
        rating: 4.7, 
        img: "https://es.web.img3.acsta.net/c_310_420/pictures/13/12/13/08/50/378271.jpg" 
    },
    {
        title: "Gladiator", 
        category: ["Acción", "Drama"], 
        type: "Pelicula", 
        rating: 4.9, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NbN-2189lvDeQ-_Igh-fVTHBkOBBmhkTbg&s" 
    },
    { 
        title: "Megamente 2", 
        category: ["Comedia", "Animación"], 
        type: "Pelicula", 
        rating: 1.0, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu963mN4JciETrOF9CHYgHKSxx4-51bAuCiA&s" 
    },

    {   title: "Megamente", 
        category: ["Comedia", "Animación"], 
        type: "Pelicula", 
        rating: 4.9, 
        img: "https://m.media-amazon.com/images/I/71uRh-nk3rL._AC_UF894,1000_QL80_.jpg" 
    },
    {   title: "Sonic: la Pelicula 2", 
        category: ["Comedia", "Acción"], 
        type: "Pelicula", 
        rating: 4.8, 
        img: "https://m.media-amazon.com/images/I/71sjqX5JayL._AC_SL1200_.jpg" 
    },
];