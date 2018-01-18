// JSON Object for sent notification messages  , This JSON object to be replaced with the one we receive from Mongodb


var influencerListObj = [
                    {
                        "FirstName": "Elena",
                        "LastName": "Desuza",
                        "InstagramID": "elina_desuza",
                        "InstagramFollowers": "10",
                        "Age": "22",
                        "Gender": "Female",
                        "DateAccepted": "01/02/2017"
                    },
                    {
                        
                        "FirstName": "Elena",
                        "LastName": "Desuza",
                        "InstagramID": "elina_desuza",
                        "InstagramFollowers": "10",
                        "Age": "22",
                        "Gender": "Female",
                        "DateAccepted": "01/02/2017"
                    },
                    {
                        
                        "FirstName": "Elena",
                        "LastName": "Desuza",
                        "InstagramID": "elina_desuza",
                        "InstagramFollowers": "10",
                        "Age": "22",
                        "Gender": "Female",
                        "DateAccepted": "01/02/2017"
                    },
                    {
                        
                        "FirstName": "Elena",
                        "LastName": "Desuza",
                        "InstagramID": "elina_desuza",
                        "InstagramFollowers": "10",
                        "Age": "22",
                        "Gender": "Female",
                        "DateAccepted": "01/02/2017"
                    },
                    {
                        
                        "FirstName": "Carol",
                        "LastName": "Thomas",
                        "InstagramID": "carol",
                        "InstagramFollowers": "13",
                        "Age": "25",
                        "Gender": "Female",
                        "DateAccepted": "01/03/2017"
                    }
    ]
function getInfluencerList() {
    // Remove Existing Content from DIV
    $("#divInfluencerList").html("");

    var table = "<table name='tblInfluencerList' styel='border:blue'><thead> \
                  <tr>\
                    <td align='center'><b>First Name</b></td>\
                    <td align='center'><b>Last Name</b></td>\
                    <td align='center'><b>Instagram ID</b></td>\
                    <td align='center'><b>Instagram Followers</b></td>\
                    <td align='center'><b>Age</b></td>\
                    <td align='center'><b>Gender</b></td>\
                    <td align='center'><b>Date Accepted</b></td>\
                    <td align='center'><b>Send Notifications</b></td>\
                  </tr>\
                </thead>\
                <tbody>\
                ";
    for (mIndex in influencerListObj) {
        //alert(notificationMsgObj.messages[mIndex].email);
        table += "<tr><td><input type='text' align='center' value='" + influencerListObj[mIndex].FirstName + "' readonly </td>";
        table += "<td><input  type='text'  align='center' value='" + influencerListObj[mIndex].LastName + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + influencerListObj[mIndex].InstagramID + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + influencerListObj[mIndex].InstagramFollowers + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + influencerListObj[mIndex].Age + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + influencerListObj[mIndex].Gender + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + influencerListObj[mIndex].DateAccepted + "' readonly</td>";
        table += "<td><button class='btn btn-default' data-toggle='modal' data-target='#divSendMessage'>Notify</button>";
        table += "</td>";
        table += "</tr>";

    }
    table += "</tbody></table>";

    $(table).appendTo("#divInfluencerList");
}