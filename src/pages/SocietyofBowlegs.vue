<template>
    <div class="p-col-12">
        <div class="card-group col-10 mx-auto">
            <div class="card bgprimary" style="margin: 20px 10px">
                <img src="assets/images/historyhero.jpg" width="100%" alt="Historic Picture">
            </div>
        </div>
    </div>
    <div class="p-col-12" style="margin-bottom: 45px;">
        <div class="col">
            <h1 class="em p-text-center" style="font-size: 60px; margin: 25px 0">KREWE OF BOWLEGS HISTORY</h1>
        </div>
    </div>
    <div class="p-col-12">
        <div class="col p-text-center">
            <h2>Society of Bowlegs</h2>
        </div>
    </div>
    <div class="p-col-12">
        <DataTable :value="tops">
            <Column field="0" header="Krewe" class="p-text-center"></Column>
            <Column field="1" header="Captain Billy"></Column>
            <Column field="2" header="Queen"></Column>
            <Column field="3" header="First Mate &amp; Mistress"></Column>
        </DataTable>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tops: [
                    ["I", "Nathan Fleet", "Dian Sloat", ""],
                    ["II", "Roger Clary", "Sheila Lewis", ""],
                    ["III", "John Cox", "Mellie Jo Peacock", ""],
                    ["IV", "Docie Bass", "Kathryn Tringas", ""],
                    ["V", "Finley Duncan", "Alex Patton", ""],
                    ["VI", "Thomas Brooks", "Bettye Williams", ""],
                    ["VII", "William Roberts", "Jean Long", ""],
                    ["VIII", "Hilary Stewart", "Agnes Bass", "Bill Colvell"],
                    ["IX", "Wilson Minger", "Carol Duncan", "Dr. Henry & Mary White"],
                    ["X", "Dr. Henry White", "Ella Clary", "Dr. Malcom & Carolyn Crotzer"],
                    ["XI", "Winston Walker", "“Sug” Brown", "James Booth"],
                    ["XII", "Dr. Malcolm Crotzer", "“Boota” Walker", "Maurice & Tena McLaughlin"],
                    ["XIII", "H. French Brown, Jr.", "Carolyn Crotzer", "Joe & Zelena Guidry"],
                    ["XIV", "Judge Erwin Fleet", "“Neen” (Gill] McHaney", "Jim & Helen Kendrick"],
                    ["XV", "Maurice McLaughlin", "Mary Ellen Ricks", "Gary & Connie Lee"],
                    ["XVI", "Jim Kendrick", "Lynne Mathews", "James & Dot Buchanan"],
                    ["XVII", "Clifford H. Long", "Dot Buchanan", "Robert & Sara Morrison"],
                    ["XVIII", "Robert Morrison", "Jo Fleet", "Bob & Dot Blizzard"],
                    ["XIX", "Joe Guidry", "Helen Kendrick", "William & Hazel Spain"],
                    ["XX", "G.V. Pardue", "Tena McLaughlin", "Bill & Bunny Alford"],
                    ["XXI", "Dr. William W. Thompson", "Mickey Harbeson", "LeDon & Annette Anchors"],
                    ["XXII", "Roy L. Ricks", "Betty (Eyrich] Kruzel", "Charlie & Lynne Mathews"],
                    ["XXIII", "William B. Harbeson, III", "Kay Stokes", "Charlie & Barbara Born"],
                    ["XXIV", "William E. Spain", "Sara (Brooks] Clemmons", "Chris & Susan Johnson"],
                    ["XXV", "Robert C. Blizzard", "Blanche Brackin", "Denzil & Merle Robbins"],
                    ["XXVI", "C. Walt Ruckel", "Donna Trum", "Frank & Mary Fisher"],
                    ["XXVII", "Thomas B. Ray", "Joan Schweizer", "Dr. David & Judy Arrowsmith"],
                    ["XXVIII", "H. Gene Smith", "Wava Ruckel", "Bill & Tina Nelson"],
                    ["XXIX", "Chris A. Johnson, Jr.", "Adelaide Harris", "Ralph & Barbara Fallin"],
                    ["XXX", "Kenneth E. Williamson", "Gloria Smith", "Herb & Amaryllis Tinsley"],
                    ["XXXI", "Dr. Alex D. Trum", "Susan Johnson", "Johnny & Marie Johnson"],
                    ["XXXII", "Ralph D. Fallin", "Martha Kilpatrick", "Harry & Virginia Barr"],
                    ["XXXIII", "James R. “Randy” Stokes", "Beverly Anchors", "Dr. Forrest & Sally Townsend"],
                    ["XXXIV", "William D. Nelson, Sr.", "Virginia Glynn Barr", "Bill & Suzie Gross"],
                    ["XXXV", "C. LeDon Anchors", "Deborah L. Roberts", "William & Katherine Dreadin"],
                    ["XXXVI", "W. Herbet Tinsley", "Carlee Foster", "Ken & Jacqueline Mathiasmeier"],
                    ["XXXVII", "James “Johnny” Johnson, III", "Jean P. Blumer", "Chuck & Gerry Ingram"],
                    ["XXXVIII", "Harry Barr", "Patricia B. Tringas", "Sam & Lisa Burkett"],
                    ["XXXIX", "Richard L. Manley", "Lisa M. Burkett", "Bart & Tracey Hudson"],
                    ["XL", "Scotty Foster", "Cissy Brown", "Bob & Pam McTyeire"],
                    ["XLI", "C.L. “Chuck” Ingram", "Marie E. Johnson", "Dr. Phil & Jeanie Blumer"],
                    ["XLII", "Gregory A. Artabasy", "Patricia P. Perri", "Fred & Pam Cochran"],
                    ["XLIII", "Samuel B. Burkett, III", "Kathleen P. Dlabal", "Jeff & Katherine McInnis"],
                    ["XLIV", "H. French Brown, III", "Lynn Crotzer Kimmel", "Dr. Brad Keller & Toni Wurth"],
                    ["XLV", "Richard A. “Dick” Roberts", "Anita D. Gates", "Brock & Cynthia Fisher"],
                    ["XLVI", "Dr. Phil Blumer", "Lynne Amiel", "Steve & Lolly Korn"],
                    ["XLVII", "Dr. Thomas “Tom” Dlabal", "Jeannie Roberts", "Frank & Jaciel Robbins"],
                    ["XLVIII", "Jeff McInnis", "Kathy Ray", "Dan & Bobbi Nelson"],
                    ["XLIX", "Frank Robbins", "Alexis Tibbetts", "Don & Karen Hutson"],
                    ["L", "Tim Ray", "Jaciel Robbins", "French & Cissy Brown"],
                    ["LI", "Dr. Keith Amiel", "Debbie Buchanan", "King & Cheryl Vaughan"],
                    ["LII", "Michael Gates", "Beverly Crews", "Mark & Ashley Siner"],
                    ["LIII", "Brock Fisher", "Kim Battiste", "Bruce & Debbie Marshall"],
                    ["LIV", "Daniel C. Perri", "Bobbi Nelson", "Ron & Judy Goodfellow"],
                    ["LV", "Bruce Marshall", "Nyla Starr", "Tim & Cristi Perry"],
                    ["LVI", "Tony Gilligan", "Charlotte Boyt", "Ken & Nancy Watson"],
                    ["LVII", "Mark C. Siner", "DeDe Bolger", "Charlie & Cindy Potts"],
                    ["LVIII", "Rick Harris", "Beth Chalker", "Gary & Tracy McMorrow"],
                    ["LIX", "Don Hutson", "Cristi Perry", "Gordon & Nyla Starr"],
                    ["LX", "Todd Bolger", "Sue Laushine", "James & Diane Baughman"],
                    ["LXI", "Ken Watson", "Sherry Locht", "Michael and Tonya Castleberry"],
                    ["LXII", "Gerry Chalker", "Tracy McMorrow", "Kevin & Andrea Leibold"],
                    ["LXIII", "Charlie Potts", "Ashley Siner", "Bill & Christina Kilpatrick"],
                    ["LXIV", "Andy Corbin", "Barbara Densmore", "Byron & Julie Cotton"],
                    ["LXV", "Buddy Carter", "Beck England", "Rique & Kelly Gwin"],
                    ['66', "Gary McMarrow", "Whitey Smith", "Tom & Catherine Mason"],
                ]
            }
        }
    }
</script>
<style>
    .p-datatable .p-datatable-tbody, .p-datatable .p-datatable-tbody > tr {
        background: none;
        color: white;
    }
</style>