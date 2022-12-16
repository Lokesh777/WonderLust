Routes Folder

### Hotel APIs

1) GET

        URL: BASE_URL+"/hotel"

    Results: 

        All Hotel Data

    Queries:

        Paginations:
        1) ?page=<Number> : gives limit hotels of that page, if page exceeds return empty array. Default 1

        2) ?limit=<Number> : number of hotel per page, default 10

        sortings:
        3) ?priceSort=<asc/desc> : sorts according to prices. if ascending compare min room price else max room price

        4) ?name=<asc/desc> : alphabetically sorts based on asc,desc

        5) ?stars=<asc/desc> :  sorts based on on starRating asc,desc

        6) ?rating=<asc/desc> :  sorts based on on rating asc,desc

        7) ?rating=<asc/desc> :  sorts based on on rating asc,desc

        8) ?crTime=<asc/desc> :  sorts based on on created time asc,desc

        9) ?mTime=<asc/desc> :  sorts based on on last modified time asc,desc

        Searching:
        10) ?q=<string> : return hotel if name string in icluded in hotel name. Hotel Name Search

        11) ?city=<string> : return hotels with that city

        Filtering:
        12) ?starsMin=<number> : return hotels having min star rating as number

        12) ?starsMax=<number> : return hotels having max star rating as number

        12) ?ratingMin=<number> : return hotels having min rating as number

        12) ?ratingMax=<number> : return hotels having min rating as number

        12) ?maxP=<number> : return hotels having min price as number

        12) ?maxP=<number> : return hotels having max price as number

