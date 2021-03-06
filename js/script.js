/* #6 start the #external #action and say hello */
console.log("App is alive");

var currentChannel;
var currentLocation = {longitude: -0.000235, latitude: 51.477067, what3words:"///issued.rescue.maker"};

function createMessageElement(messageObject){
	var txt='';
	txt=txt+ '<div class="message"><h3><a href="';
	txt=txt+messageObject.createdBy;
	txt=txt+'" target="_blank"><strong>';
	txt=txt+messageObject.createdBy;
	txt=txt+'</strong></a>';
        txt=txt+messageObject.createdOn;
	txt=txt+'<em>';
	txt=txt+':expiresIn:';
	txt=txt+' min. left</em></h3><p>';
	txt=txt+messageObject.text;
	txt=txt+'</p><button>+5 min.</button></div>';
	return txt;
}

function Message(text) {
  this.createdBy = currentLocation.createdBy;
  this.latitude = currentLocation.latitude;
  this.longitude = currentLocation.longitude;
  this.createdOn = Date.now();
  this.expiresOn = Date.now(); //is a future date: in 15 minutes. Google how to set a future date in JavaScript.
  this.text = text;
  this.own = true;
}

function sendMessage(){
    var newMessage = new Message($('#chatMessage').val() );
    $("#messages").append(createMessageElement(newMessage));
    $('#chatMessage').value="";
    console.log("Message Hello Chatter");
}

function selectChannel(channel) {
    currentChannel=channel;
}

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channel) {
	
    currentChannel=channel;
	
    //Log the channel switch
    console.log("Tuning in to channel", channel.name);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channel.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';

    /* #6 #liking channels on #click */
    $('#channel-star').attr('class', channel.starred ? 'fas fa-star' : 'far fa-star');
    /*
	$( "div:contains(channel.name)" ).css( "text-decoration", "underline" );
    */

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channel + ')').addClass('selected');
}

/* #6 #liking a channel on #click */
function star() {
/*    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');*/
    $('#channel-star').toggleClass("fas fa-star far fa-star");
	currentChannel.starred=!(currentChannel.starred);
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}
