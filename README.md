# great-gatsby-backend

Backend service for Great Gatsby Movie App

Steps to setup local

1. Clone the repo
2. Remove package.lock files.
3. Run npm install
4. Run npm start

Service will be up at http://localhost:8080

To search for a movie use,

Req Url - http://localhost:8080/feed/posts/thuppakki

Response :

{"posts":"{\"page\":1,\"results\":[{\"adult\":false,\"backdrop_path\":\"/itm6HknrBWGTAicBITeqEThIrQw.jpg\",\"genre_ids\":[28,53],\"id\":143010,\"original_language\":\"ta\",\"original_title\":\"துப்பாக்கி\",\"overview\":\"An army captain is on a mission to track down and destroy a terrorist gang and deactivate the sleeper cells under its command.\",\"popularity\":4.103,\"poster_path\":\"/qkvz7dJ0isbxUTM20Vce6rho0wG.jpg\",\"release_date\":\"2012-11-13\",\"title\":\"Thuppakki\",\"video\":false,\"vote_average\":7.1,\"vote_count\":56},{\"adult\":false,\"backdrop_path\":\"/4QSbPrnOQkDy61SqiRiJdf5ML4E.jpg\",\"genre_ids\":[10749,28,53],\"id\":499362,\"original_language\":\"ta\",\"original_title\":\"துப்பாக்கி முனை\",\"overview\":\"Birla Bose, an encounter specialist's next assignment takes him to the holy city of Rameshwaram, where the greatest challenge of his career awaits for him.\",\"popularity\":1.344,\"poster_path\":\"/sPVs1vowAKEGqsrPZiAGeTgNd3m.jpg\",\"release_date\":\"2018-12-14\",\"title\":\"Thuppakki Munai\",\"video\":false,\"vote_average\":5.6,\"vote_count\":4},{\"adult\":false,\"backdrop_path\":null,\"genre_ids\":[35],\"id\":260628,\"original_language\":\"ta\",\"original_title\":\"கள்ளத்துப்பாக்கி\",\"overview\":\"Four students (Viccy, Prabhakaran, Anand, SB Tamil Selvan) are rebels without a cause. They are always at loggerheads with their PT master (Sampath Ram) and his daughter (Sravanthika).  They want to somehow create problems for the strict master but ends up in trouble when they are kidnapped along with the master’s daughter by a Chennai-based gang who are into theft, rape, and other nefarious activities.  And the root cause is an expensive antique gun, which the boys mistake for a Kalla Thuppakki (fake-gun) and stole when they were on a trip to Chennai!!\",\"popularity\":0.6,\"poster_path\":null,\"release_date\":\"2013-01-04\",\"title\":\"Kalla Thuppakki\",\"video\":false,\"vote_average\":0,\"vote_count\":0}],\"total_pages\":1,\"total_results\":3}"}
