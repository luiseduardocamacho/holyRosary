/**
 * App ID for the skill
 */
var APP_ID = undefined;//replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

/**
 * Array containing prayers
 */

var PRAYERS = [
    {name:"Our Father",
        prayer:"<p>Our Father, Who art in heaven</p> <p>Hallowed be Thy Name</p> <p>Thy kingdom come,</p> <p>Thy will be done,</p> <p>on earth as it is in heaven.</p> <p>Give us this day our daily bread,</p> <p>and forgive us our trespasses, as we forgive those who trespass against us;</p> <p>and lead us not into temptation,</p> <p>but deliver us from evil.</p>", 
            prayercard: "Our Father, Who art in heaven Hallowed be Thy Name Thy kingdom come, Thy will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil."
    },
    {name:"Hail Mary",
        prayer: "<p>Hail Mary full of Grace,</p> <p>the Lord is with thee.</p> <p>Blessed are thou among women and blessed is the fruit of thy womb Jesus.</p> <p>Holy Mary Mother of God,</p> <p>pray for us sinners now and at the hour of our death</p> ",
            prayerscard:"Hail Mary full of Grace, the Lord is with thee. Blessed are thou among women and blessed is the fruit of thy womb Jesus. Holy Mary Mother of God, pray for us sinners now and at the hour of our death"
    },
    {name:"Glory Be",
        prayer:"<p>Glory be to the Father,</p> <p>and to the Son,</p> <p>and to the Holy Spirit,</p> <p>as it was in the beginning,</p> <p>it is now,</p> <p>and ever shall be,</p> <p>world without end.</p>",
            prayerscard:"Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, it is now, and ever shall be, world without end."
    },  
    {name:"The Sign of the Cross",
        prayer:"<p>In the name of the father</p> <p>And the Son,</p> <p>and the Holy Spirit</p>",
            prayerscard:"In the name of the father, And the Son, And the Holy Spirit, Amen."        
    }, 
    {name:"Apostles' Creed",
    	prayer:"<p>I believe in God,</p><p>the Father Almighty,</p><p> Creator of Heaven and earth;</p><p> and in Jesus Christ,</p><p> His only Son,</p><p>Our Lord,</p><p> Who was conceived by the Holy Spirit,</p><p> born of the Virgin Mary,</p><p> suffered under Pontius Pilate,</p><p> was crucified,</p><p> died,</p><p> and was buried.</p><p> He descended into Hell.</p><p> The third day He arose again from the dead;</p><p> He ascended into Heaven, </p><p> and is sitteth at the right hand of God, the Father Almighty;</p><p> from there He shall come to judge the living and the dead.</p><p> I believe in the Holy Spirit,</p><p> the holy Catholic Church,</p><p>the communion of saints,</p><p> the forgiveness of sins,</p><p>the resurrection of the body,</p><p> and the life everlasting.</p>",
    		prayerscard:"I believe in God,the Father Almighty, Creator of Heaven and earth; and in Jesus Christ, His only Son,Our Lord, Who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into Hell. The third day He arose again from the dead; He ascended into Heaven, and is sitteth at the right hand of God, the Father Almighty; from there He shall come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church,the communion of saints, the forgiveness of sins,the resurrection of the body, and the life everlasting."
    },
    {name:"Hail Holy Queen",
    	prayer:"<p>Hail Holy Queen, Mother of mercy,</p><p> our life, our sweetness and our hope.</p><p> To thee do we cry, poor banished children of Eve: </p><p>to thee do we send up our sighs. mourning and weeping in this valley of tears.</p><p> Turn then, most gracious Advocate, thine eyes of mercy toward us,</p><p> and after this, our exile </p><p>show unto us the blessed fruit of thy womb Jesus. </p><p>O clement, </p><p>O loving, </p><p>O sweet Virgin Mary! </p><p> Pray for us, O holy Mother of God. </p><p>That we may be made worthy of the promises of Christ.</p>",
    		prayerscard:"Hail Holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve: to thee do we send up our sighs. mourning and weeping in this valley of tears. Turn then, most gracious Advocate, thine eyes of mercy toward us, and after this, our exile show unto us the blessed fruit of thy womb Jesus. O clement, O loving, O sweet Virgin Mary!  Pray for us, O holy Mother of God. That we may be made worthy of the promises of Christ."
	},
	{name:"Church",
    	prayer:"<p>For the intentions of the church</p>",
    		prayerscard:"For the intentions of the church"
   	},
   	{name:"Faith",
    	prayer:"<p>For the virtue of faith</p>",
    		prayerscard:"For the virtue of faith"
	},
	{name:"Hope",
    	prayer:"<p>For the virtue of hope</p>",
    		prayerscard:"For the intentions of hope"
	},
	{name:"Charity",
    	prayer:"<p>For the virtue of charity</p>",
    		prayerscard:"For the virtue of charity"
	},
	{name:"The Annunciation of the Angel to Mary",
    	prayer:"<p>First Joyful mystery</p><p>The Annunciation of the Angel to Mary</p>",
    		prayerscard:"The Annunciation of the Angel to Mary"
	},
	{name:"The Visitation of Mary to Saint Elizabeth",
    	prayer:"<p>Second Joyful mystery</p><p>The Visitation of Mary to Saint Elizabeth</p>",
    		prayerscard:"The Visitation of Mary to Saint Elizabeth"
	},
	{name:"The Nativity of Jesus in Bethlehem",
    	prayer:"<p>Third Joyful mystery</p><p>The Nativity of Jesus in Bethlehem</p>",
    		prayerscard:"The Nativity of Jesus in Bethlehem"
	},
	{name:"The presentation of Jesus to the Temple",
    	prayer:"<p>Fourth Joyful mystery</p><p>The presentation of Jesus to the Temple</p>",
    		prayerscard:"The presentation of Jesus to the Temple"
	},
	{name:"The finding of Jesus in the Temple",
    	prayer:"<p>Fifth Joyful mystery</p><p>The finding of Jesus in the Temple</p>",
    		prayerscard:"The finding of Jesus in the Temple"
	},
	{name:"The Baptism of Jesus",
    	prayer:"<p>First Luminous Mystery</p><p>The Baptism of Jesus</p>",
    		prayerscard:"The Baptism of Jesus"
	},
	{name:"The Wedding of Cana",
    	prayer:"<p>Second Luminous Mystery</p><p>The Wedding of Cana</p>",
    		prayerscard:"The Wedding of Cana"
	},
	{name:"The Proclamation of the Kingdom of God",
    	prayer:"<p>Third Luminous Mystery</p><p>The Proclamation of the Kingdom of God</p>",
    		prayerscard:"The Proclamation of the Kingdom of God"
	},
	{name:"The Transfiguration",
    	prayer:"<p>Fourth Luminous Mystery</p><p>The Transfiguration</p>",
    		prayerscard:"The Transfiguration"
	},
	{name:"The Institution of the Eucharist",
    	prayer:"<p>Fifth Luminous Mystery</p><p>The Institution of the Eucharist</p>",
    		prayerscard:"The Institution of the Eucharist"
	},
	{name:"The Agony of Jesus in the Garden",
    	prayer:"<p>First Sorrowful Mystery</p><p>The Agony of Jesus in the Garden</p>",
    		prayerscard:"The Agony of Jesus in the Garden"
	},
	{name:"The Scourging of Jesus at the Pillar",
    	prayer:"<p>Second Sorrowful Mystery</p><p>The Scourging of Jesus at the Pillar</p>",
    		prayerscard:"The Scourging of Jesus at the Pillar"
	},
	{name:"The Crowning with Thorns",
    	prayer:"<p>Third Sorrowful Mystery</p><p>The Crowning with Thorns</p>",
    		prayerscard:"The Crowning with Thorns"
	},
	{name:"The Carrying of the Cross",
    	prayer:"<p>Fourth Sorrowful Mystery</p><p>The Carrying of the Cross</p>",
    		prayerscard:"The Carrying of the Cross"
	},
	{name:"The crucifixion and death of Jesus",
    	prayer:"<p>Fifth Sorrowful Mystery</p><p>The crucifixion and death of Jesus</p>",
    		prayerscard:"The crucifixion and death of Jesus"
	},
	{name:"The Resurrection of Jesus Christ",
    	prayer:"<p>First Glorious Mystery</p><p>The Resurrection of Jesus Christ</p>",
    		prayerscard:"The Resurrection of Jesus Christ"
	},
	{name:"The Ascension of Jesus to Heaven",
    	prayer:"<p>Second Glorious Mystery</p><p>The Ascension of Jesus to Heaven</p>",
    		prayerscard:"The Ascension of Jesus to Heaven"
	},
	{name:"The Descent of the Holy Ghost",
    	prayer:"<p>Third Glorious Mystery</p><p>The Descent of the Holy Ghost</p>",
    		prayerscard:"The Descent of the Holy Ghost"
	},
	{name:"The Assumption of the Blessed Virgin Mary into Heaven",
    	prayer:"<p>Fourth Glorious Mystery</p><p>The Assumption of the Blessed Virgin Mary into Heaven</p>",
    		prayerscard:"The Assumption of the Blessed Virgin Mary into Heaven"
	},
	{name:"The Coronation of the Blessed Virgin Mary, Queen of Heaven and Earth",
    	prayer:"<p>Fifth Glorious Mystery</p><p>The Coronation of the Blessed Virgin Mary, Queen of Heaven and Earth</p>",
    		prayerscard:"The Coronation of the Blessed Virgin Mary, Queen of Heaven and Earth"
	},
	{name:"Fatima Prayer",
    	prayer:"<p>O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy.</p>",
    		prayerscard:"O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy."
	},
	{name:"The Breviary.",
    	prayer:"<p>O God, whose only begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal life. Grant, we beseech Thee, that by meditating on these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen. Pour forth we beseech Thee, O Lord, Thy grace into our hearts, that we to whom the incarnation of Christ, Thy Son, was made known by the message of an angel, may by His passion and cross be brought to the glory of His resurrection, through the same Christ Our Lord.</p>",
    		prayerscard:"O God, whose only begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal life. Grant, we beseech Thee, that by meditating on these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen. Pour forth we beseech Thee, O Lord, Thy grace into our hearts, that we to whom the incarnation of Christ, Thy Son, was made known by the message of an angel, may by His passion and cross be brought to the glory of His resurrection, through the same Christ Our Lord."
	},
	{name:"Intentions of the Holy Father",
    	prayer:"<p>For the intentions of the Holy Father</p>",
    		prayerscard:"For the intentions of the Holy Father"
	},
	{name:"Intentions of the Bishop of the parish",
    	prayer:"<p>For the intentions of the Bishop of the parish</p>",
    		prayerscard:"For the intentions of the Bishop of the parish"
	},
	{name:"Holy souls in purgatory",
    	prayer:"<p>For the holy souls in purgatory</p>",
    		prayerscard:"For the holy souls in purgatory"
	} 
	 
];

/**
 * Array containing prayer index thar corresponde to the PRAYERS array
 */

var PRAYER_INDEX = ["Our Father","Hail Mary","Glory Be", "The Sign of the Cross", "Apostles Creed","Hail Holy Queen","Church","Faith","Hope","Charity", "First Joyful","Second Joyful", "Third Joyful", "Fourth Joyful", "Fifth Joyful", "First Luminous", "Second Luminous", "Third Luminous", "Fourth Luminous", "Fifth Luminous","First Sorrowful", "Second Sorrowful", "Third Sorrowful", "Fourth Sorrowful", "Fifth Sorrowful", "First Glorious", "Second Glorious", "Third Glorious","Fourth Glorious", "Fifth Glorious","Fatima Prayer","The Breviary","Holy Father","Bishop","Souls in Purgatory"];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

var HolyRosary = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
HolyRosary.prototype = Object.create(AlexaSkill.prototype);
HolyRosary.prototype.constructor = HolyRosary;

HolyRosary.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    session.attributes.mystery = 0;
    session.attributes.prayercount = 0; 
    // Any session init logic would go here.
};

HolyRosary.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    var speechText = "Welcome to the Holy Rosary, say the name of the mystery you would like me to pray. You can say. Pray the Joyful mysteries. Or Pray the Sorrowful mysteries. Or Pray the Luminous mysteries. Or pray the Glorious mysteries";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    var repromptText = "For instructions on what you can say, please say help me.";
    response.ask(speechText, repromptText);
};

HolyRosary.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);

    //Any session cleanup logic would go here.
};

HolyRosary.prototype.intentHandlers = {
	"AmenIntent": function (intent, session, response){
		if(session.attributes.mystery != 0)
        	switch(session.attributes.mystery){
				case 'Glorious':
					handleGloriousMysteryIntent(intent, session, response);
					break;
				case 'Joyful':
					handleJoyfulMysteryIntent(intent, session, response);
					break;
				case 'Luminous':
					handleLuminousMysteryIntent(intent, session, response);
					break;		
				case 'Sorrowful':
					handleSorrowfulMysteryIntent(intent, session, response);
					break;		
				}
    	else
    	{
    		var speechText = "Which mystery would you like me to say?. ou can say the name of the mystery you would like me to say. For example, you can say: Pray the Joyful Mysteries."
    		var repromptText = "Say one of these things: Pray the joyful mysteries. Or. Pray the sorrowful mysteries. Or. Pray the Luminous mysteries. Or. Pray the Glorious mysteries. You can alsy say. pray the litany of the blessed virgin mary. Now what would you like me to do?"
    		var speechOutput = {
            	speech: speechText,
            	type: AlexaSkill.speechOutputType.PLAIN_TEXT
        		};
    		var repromptOutput = {
            	speech: repromptText,
            	type: AlexaSkill.speechOutputType.PLAIN_TEXT
        	};
        response.ask(speechOutput, repromptOutput);
    	}
    },

    "HandleGloriousMysteries": function (intent, session, response){
    	handleGloriousMysteryIntent(intent, session, response);
    },

    "HandleJoyfulMysteries": function (intent, session, response){
    	handleJoyfulMysteryIntent(intent, session, response);
    },

    "HandleLuminousMysteries": function (intent, session, response){
    	handleLuminousMysteryIntent(intent, session, response);
    },

    "HandleSorrowfulMysteries": function (intent, session, response){
    	handleSorrowfulMysteryIntent(intent, session, response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        var speechText = "You can say the name of the mystery you would like me to say. For example, you can say: Pray the Joyful Mysteries. Now which mystery would you like me to say?";
        var repromptText = "Say one of these things: Pray the joyful mysteries. Or. Pray the sorrowful mysteries. Or. Pray the Luminous mysteries. Or. Pray the Glorious mysteries. You can alsy say. pray the litany of the blessed virgin mary. Now what would you like me to do?";
        var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.ask(speechOutput, repromptOutput);
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/////GLORIOUS MYSTERIES//////
/////GLORIOUS MYSTERIES/////
/////GLORIOUS MYSTERIES/////
/////GLORIOUS MYSTERIES//////
/////GLORIOUS MYSTERIES/////

function handleGloriousMysteryIntent(intent, session, response) {
console.log("The mystery attribute is: " + session.attributes.mystery + "The prayer count attribute is: " + session.attributes.prayercount);
    
    var repromptText = "<speak>" + "To continue praying the mystery please say. Amen. To pray a different mystery, please say stop. and then say the mystery you would like me to pray. Now, say stop, amen, or help" + "</speak>" ;
    var speechText = "";
    var utterance = "";
    var user_utterance = "";
    if (intent.slots)
    {
    	utterance = intent.slots.Utterances.value;
    	user_utterance = utterance.toLowerCase(); 
    }
    
    session.attributes.mystery = 'Glorious';
    console.log("User Utterance: " + user_utterance);
    if ( (user_utterance == 'amen' || user_utterance == 'pray for us' || user_utterance == 'continue') || (session.attributes.prayercount === 0) ){
        if (session.attributes.mystery === 'Glorious'){
            console.log("I am inside the Glorious Mystery");
            switch(session.attributes.prayercount){
                case 0: 
                    console.log("I am inside the SWITCH" + PRAYER_INDEX.indexOf("Our Father"));
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("The Sign of the Cross")].prayer + "</speak>"
                    session.attributes.prayercount = 1;
                    break;
                case 1:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Apostles Creed")].prayer + "</speak>"
                    session.attributes.prayercount = 2;
                    break;
                case 2:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Church")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 3;
                    break;
                case 3:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Faith")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 4;
                    break;
                case 4:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hope")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 5;
                    break;    
                case 5:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Charity")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 6;
                    break; 
                case 6:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 7;
                    break; 
                case 7:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("First Glorious")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer +"</speak>"
                    session.attributes.prayercount = 9;
                    break; 
                /**case 8:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 9;
                    break;*/
                case 9:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 10;
                    break;
                case 10:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 11;
                    break;
                case 11:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 12;
                    break;
                case 12: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 13;
                    break;
                case 13:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 14;
                    break;    
                case 14:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 15;
                    break;   
                case 15:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 16;
                    break;
                case 16:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 17;
                    break;
                case 17:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 18;
                    break;        
                case 18:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 19;
                    break;    
                case 19:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 20;
                    break; 
                case 20:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 21;
                    break;     
                case 21:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Second Glorious")].prayer +  PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 23;
                    break; 
                /**case 22:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 23;
                    break;*/
                case 23:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 24;
                    break;
                case 24:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 25;
                    break;
                case 25:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 26;
                    break;
                case 26: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 27;
                    break;
                case 27:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 28;
                    break;    
                case 28:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 29;
                    break;   
                case 29:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 30;
                    break;
                case 30:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 31;
                    break;
                case 31:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 32;
                    break;        
                case 32:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 33;
                    break;    
                case 33:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 34;
                    break; 
                case 34:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 35;
                    break;
                case 35:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Third Glorious")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 37;
                    break;
                /**case 36:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 37;
                    break;*/
                case 37:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 38;
                    break;
                case 38:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 39;
                    break;
                case 39:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 40;
                    break;
                case 40: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 41;
                    break;
                case 41:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 42;
                    break;    
                case 42:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 43;
                    break;   
                case 43:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 44;
                    break;
                case 44:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 45;
                    break;
                case 45:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 46;
                    break;        
                case 46:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 47;
                    break;    
                case 47:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 48;
                    break; 
                case 48:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 49;
                    break; 
                 case 49:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fourth Glorious")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 51;
                    break; 
                /** case 50:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 51;
                    break; */
                case 51:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 52;
                    break;
                case 52:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 53;
                    break;
                case 53:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 54;
                    break;
                case 54: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 55;
                    break;
                case 55:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 56;
                    break;    
                case 56:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 57;
                    break;   
                case 57:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 58;
                    break;
                case 58:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 59;
                    break;
                case 59:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 60;
                    break;        
                case 60:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 61;
                    break;    
                case 61:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 62;
                    break; 
                case 62:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 63;
                    break; 
                case 63: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fifth Glorious")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 65;
                    break; 
                /** case 64:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 65;
                    break;*/
                case 65:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 66;
                    break;
                case 66:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 67;
                    break;
                case 67:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 68;
                    break;
                case 68: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 69;
                    break;
                case 69:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 70;
                    break;    
                case 70:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 71;
                    break;   
                case 71:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 72;
                    break;
                case 72:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 73;
                    break;
                case 73:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 74;
                    break;        
                case 74:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 75;
                    break;    
                case 75:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 76;
                    break; 
                case 76:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 77;
                    break;
				case 77:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Holy Queen")].prayer + "</speak>"
                    session.attributes.prayercount = 78;
                    break;
                case 78:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("The Breviary")].prayer + "</speak>"
                    session.attributes.prayercount = 79;
                    break;
                case 79:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Holy Father")].prayer + "</speak>"
                    session.attributes.prayercount = 80;
                    break;
				case 80:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 81;
                    break;
                case 81:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 82;
                    break;
                case 82:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 83;
                    break;
                case 83:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Bishop")].prayer + "</speak>"
                    session.attributes.prayercount = 84;
                    break;
                case 84:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 85;
                    break;
                case 85:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 86;
                    break;
                case 86:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 87;
                    break;     
                case 87:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Souls in Purgatory")].prayer + "</speak>"
                    session.attributes.prayercount = 88;
                    break;     
                case 88:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 89;
                    break;     
                case 89:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 90;
                    break;     
                case 90:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "Rest in peace" + "</speak>"
                    session.attributes.prayercount = 91;
                    break;                                            
                case 91:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("The Sign of the Cross")].prayer + "</speak>"
                    break;     

            }
        }    
	}	
	else
	{
		var repromptText = "<speak>" + "To continue praying the mystery please say. Amen. To pray a different mystery, please say stop. and then say the mystery you would like me to pray. Now, say stop, amen, or help" + "</speak>";
    	var speechText = "<speak>" + "I didn't understand what you just said. To continue praying the mystery please say Amen. To pray a different mystery please say stop and then say the mystery you would like me to pray. Now say stop, amen, or help" + "</speak>";
	}
    var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.SSML
        };
    var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.SSML
        };
        // For the repromptText, play the speechOutput again
    response.ask(speechOutput, repromptOutput);       
}

/////GLORIOUS MYSTERIES END/////
/////GLORIOUS MYSTERIES END/////
/////GLORIOUS MYSTERIES END/////
/////GLORIOUS MYSTERIES END/////
/////GLORIOUS MYSTERIES END/////

/////JOYFUL MYSTERIES//////
/////JOYFUL MYSTERIES/////
/////JOYFUL MYSTERIES//////
/////JOYFUL MYSTERIES/////
/////JOYFUL MYSTERIES//////

function handleJoyfulMysteryIntent(intent, session, response) {
console.log("The mystery attribute is: " + session.attributes.mystery + "The prayer count attribute is: " + session.attributes.prayercount);
    
    var repromptText = "<speak>" + "To continue praying the mystery please say. Amen. To pray a different mystery, please say stop. and then say the mystery you would like me to pray. Now, say stop, amen, or help" + "</speak>";
    var speechText = "";
    var utterance = "";
    var user_utterance = "";
    if (intent.slots)
    {
    	utterance = intent.slots.Utterances.value;
    	user_utterance = utterance.toLowerCase(); 
    }
    
    session.attributes.mystery = 'Joyful';
    console.log("User Utterance: " + user_utterance);
    if ( (user_utterance == 'amen' || user_utterance == 'pray for us' || user_utterance == 'continue') || (session.attributes.prayercount === 0) ){
        if (session.attributes.mystery === 'Joyful'){
            console.log("I am inside the Joyful Mystery");
            switch(session.attributes.prayercount){
                case 0: 
                    console.log("I am inside the SWITCH" + PRAYER_INDEX.indexOf("Our Father"));
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("The Sign of the Cross")].prayer + "</speak>"
                    session.attributes.prayercount = 1;
                    break;
                case 1:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Apostles Creed")].prayer + "</speak>"
                    session.attributes.prayercount = 2;
                    break;
                case 2:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Church")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 3;
                    break;
                case 3:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Faith")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 4;
                    break;
                case 4:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hope")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 5;
                    break;    
                case 5:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Charity")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 6;
                    break; 
                case 6:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 7;
                    break; 
                case 7:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("First Joyful")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer +"</speak>"
                    session.attributes.prayercount = 9;
                    break; 
                /**case 8:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 9;
                    break;*/
                case 9:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 10;
                    break;
                case 10:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 11;
                    break;
                case 11:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 12;
                    break;
                case 12: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 13;
                    break;
                case 13:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 14;
                    break;    
                case 14:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 15;
                    break;   
                case 15:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 16;
                    break;
                case 16:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 17;
                    break;
                case 17:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 18;
                    break;        
                case 18:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 19;
                    break;    
                case 19:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 20;
                    break; 
                case 20:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 21;
                    break;     
                case 21:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Second Joyful")].prayer +  PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 23;
                    break; 
                /**case 22:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 23;
                    break;*/
                case 23:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 24;
                    break;
                case 24:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 25;
                    break;
                case 25:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 26;
                    break;
                case 26: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 27;
                    break;
                case 27:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 28;
                    break;    
                case 28:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 29;
                    break;   
                case 29:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 30;
                    break;
                case 30:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 31;
                    break;
                case 31:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 32;
                    break;        
                case 32:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 33;
                    break;    
                case 33:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 34;
                    break; 
                case 34:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 35;
                    break;
                case 35:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Third Joyful")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 37;
                    break;
                /**case 36:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 37;
                    break;*/
                case 37:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 38;
                    break;
                case 38:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 39;
                    break;
                case 39:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 40;
                    break;
                case 40: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 41;
                    break;
                case 41:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 42;
                    break;    
                case 42:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 43;
                    break;   
                case 43:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 44;
                    break;
                case 44:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 45;
                    break;
                case 45:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 46;
                    break;        
                case 46:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 47;
                    break;    
                case 47:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 48;
                    break; 
                case 48:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 49;
                    break; 
                 case 49:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fourth Joyful")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 51;
                    break; 
                /** case 50:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 51;
                    break; */
                case 51:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 52;
                    break;
                case 52:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 53;
                    break;
                case 53:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 54;
                    break;
                case 54: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 55;
                    break;
                case 55:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 56;
                    break;    
                case 56:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 57;
                    break;   
                case 57:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 58;
                    break;
                case 58:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 59;
                    break;
                case 59:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 60;
                    break;        
                case 60:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 61;
                    break;    
                case 61:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 62;
                    break; 
                case 62:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 63;
                    break; 
                case 63: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fifth Joyful")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 65;
                    break; 
                /** case 64:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 65;
                    break;*/
                case 65:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 66;
                    break;
                case 66:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 67;
                    break;
                case 67:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 68;
                    break;
                case 68: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 69;
                    break;
                case 69:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 70;
                    break;    
                case 70:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 71;
                    break;   
                case 71:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 72;
                    break;
                case 72:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 73;
                    break;
                case 73:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 74;
                    break;        
                case 74:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 75;
                    break;    
                case 75:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 76;
                    break; 
                case 76:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 77;
                    break;
				case 77:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Holy Queen")].prayer + "</speak>"
                    session.attributes.prayercount = 78;
                    break;
                case 78:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("The Breviary")].prayer + "</speak>"
                    session.attributes.prayercount = 79;
                    break;
                case 79:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Holy Father")].prayer + "</speak>"
                    session.attributes.prayercount = 80;
                    break;
				case 80:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 81;
                    break;
                case 81:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 82;
                    break;
                case 82:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 83;
                    break;
                case 83:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Bishop")].prayer + "</speak>"
                    session.attributes.prayercount = 84;
                    break;
                case 84:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 85;
                    break;
                case 85:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 86;
                    break;
                case 86:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 87;
                    break;     
                case 87:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Souls in Purgatory")].prayer + "</speak>"
                    session.attributes.prayercount = 88;
                    break;     
                case 88:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 89;
                    break;     
                case 89:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 90;
                    break;     
                case 90:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "Rest in peace" + "</speak>"
                    session.attributes.prayercount = 91;
                    break;                                            
                case 91:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("The Sign of the Cross")].prayer + "</speak>"
                    break;     

            }
        }    
	}	
	else
	{
		var repromptText = "<speak>" + "To continue praying the mystery please say. Amen. To pray a different mystery, please say stop. and then say the mystery you would like me to pray. Now, say stop, amen, or help" + "</speak>";
        var speechText = "<speak>" + "I didn't understand what you just said. To continue praying the mystery please say Amen. To pray a different mystery please say stop and then say the mystery you would like me to pray. Now say stop, amen, or help" + "</speak>";
	}
    var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.SSML
        };
    var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.SSML
        };
        // For the repromptText, play the speechOutput again
    response.ask(speechOutput, repromptOutput);       
}

/////JOYFUL END//////
/////JOYFUL END/////
/////JOYFUL END//////
/////JOYFUL END/////
/////JOYFUL END//////

/////LUMINOUS/////
/////LUMINOUS//////
/////LUMINOUS/////
/////LUMINOUS//////
/////LUMINOUS/////


function handleLuminousMysteryIntent(intent, session, response) {
console.log("The mystery attribute is: " + session.attributes.mystery + "The prayer count attribute is: " + session.attributes.prayercount);
    
    var repromptText = "<speak>" + "To continue praying the mystery please say. Amen. To pray a different mystery, please say stop. and then say the mystery you would like me to pray. Now, say stop, amen, or help" + "</speak>";
    var speechText = "";
    var utterance = "";
    var user_utterance = "";
    if (intent.slots)
    {
    	utterance = intent.slots.Utterances.value;
    	user_utterance = utterance.toLowerCase(); 
    }
    
    session.attributes.mystery = 'Luminous';
    console.log("User Utterance: " + user_utterance);
    if ( (user_utterance == 'amen' || user_utterance == 'pray for us' || user_utterance == 'continue') || (session.attributes.prayercount === 0) ){
        if (session.attributes.mystery === 'Luminous'){
            console.log("I am inside the Luminous Mystery");
            switch(session.attributes.prayercount){
                case 0: 
                    console.log("I am inside the SWITCH" + PRAYER_INDEX.indexOf("Our Father"));
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("The Sign of the Cross")].prayer + "</speak>"
                    session.attributes.prayercount = 1;
                    break;
                case 1:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Apostles Creed")].prayer + "</speak>"
                    session.attributes.prayercount = 2;
                    break;
                case 2:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Church")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 3;
                    break;
                case 3:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Faith")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 4;
                    break;
                case 4:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hope")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 5;
                    break;    
                case 5:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Charity")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 6;
                    break; 
                case 6:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 7;
                    break; 
                case 7:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("First Luminous")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 9;
                    break; 
                /**case 8:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 9;
                    break;*/
                case 9:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 10;
                    break;
                case 10:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 11;
                    break;
                case 11:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 12;
                    break;
                case 12: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 13;
                    break;
                case 13:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 14;
                    break;    
                case 14:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 15;
                    break;   
                case 15:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 16;
                    break;
                case 16:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 17;
                    break;
                case 17:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 18;
                    break;        
                case 18:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 19;
                    break;    
                case 19:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 20;
                    break; 
                case 20:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 21;
                    break;     
                case 21:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Second Luminous")].prayer +  PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 23;
                    break; 
                /**case 22:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 23;
                    break;*/
                case 23:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 24;
                    break;
                case 24:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 25;
                    break;
                case 25:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 26;
                    break;
                case 26: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 27;
                    break;
                case 27:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 28;
                    break;    
                case 28:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 29;
                    break;   
                case 29:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 30;
                    break;
                case 30:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 31;
                    break;
                case 31:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 32;
                    break;        
                case 32:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 33;
                    break;    
                case 33:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 34;
                    break; 
                case 34:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 35;
                    break;
                case 35:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Third Luminous")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 37;
                    break;
                /**case 36:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 37;
                    break;*/
                case 37:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 38;
                    break;
                case 38:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 39;
                    break;
                case 39:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 40;
                    break;
                case 40: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 41;
                    break;
                case 41:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 42;
                    break;    
                case 42:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 43;
                    break;   
                case 43:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 44;
                    break;
                case 44:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 45;
                    break;
                case 45:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 46;
                    break;        
                case 46:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 47;
                    break;    
                case 47:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 48;
                    break; 
                case 48:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 49;
                    break; 
                 case 49:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fourth Luminous")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 51;
                    break; 
                /** case 50:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 51;
                    break; */
                case 51:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 52;
                    break;
                case 52:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 53;
                    break;
                case 53:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 54;
                    break;
                case 54: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 55;
                    break;
                case 55:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 56;
                    break;    
                case 56:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 57;
                    break;   
                case 57:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 58;
                    break;
                case 58:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 59;
                    break;
                case 59:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 60;
                    break;        
                case 60:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 61;
                    break;    
                case 61:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 62;
                    break; 
                case 62:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 63;
                    break; 
                case 63: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fifth Luminous")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 65;
                    break; 
                /** case 64:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 65;
                    break;*/
                case 65:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 66;
                    break;
                case 66:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 67;
                    break;
                case 67:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 68;
                    break;
                case 68: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 69;
                    break;
                case 69:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 70;
                    break;    
                case 70:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 71;
                    break;   
                case 71:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 72;
                    break;
                case 72:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 73;
                    break;
                case 73:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 74;
                    break;        
                case 74:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 75;
                    break;    
                case 75:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 76;
                    break; 
                case 76:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 77;
                    break;
				case 77:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Holy Queen")].prayer + "</speak>"
                    session.attributes.prayercount = 78;
                    break;
                case 78:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("The Breviary")].prayer + "</speak>"
                    session.attributes.prayercount = 79;
                    break;
                case 79:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Holy Father")].prayer + "</speak>"
                    session.attributes.prayercount = 80;
                    break;
				case 80:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 81;
                    break;
                case 81:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 82;
                    break;
                case 82:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 83;
                    break;
                case 83:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Bishop")].prayer + "</speak>"
                    session.attributes.prayercount = 84;
                    break;
                case 84:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 85;
                    break;
                case 85:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 86;
                    break;
                case 86:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 87;
                    break;     
                case 87:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Souls in Purgatory")].prayer + "</speak>"
                    session.attributes.prayercount = 88;
                    break;     
                case 88:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 89;
                    break;     
                case 89:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 90;
                    break;     
                case 90:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "Rest in peace" + "</speak>"
                    session.attributes.prayercount = 91;
                    break;                                            
                case 91:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("The Sign of the Cross")].prayer + "</speak>"
                    break;     

            }
        }    
	}	
	else
	{
		var repromptText = "<speak>" + "To continue praying the mystery please say. Amen. To pray a different mystery, please say stop. and then say the mystery you would like me to pray. Now, say stop, amen, or help" + "</speak>";
        var speechText = "<speak>" + "I didn't understand what you just said. To continue praying the mystery please say Amen. To pray a different mystery please say stop and then say the mystery you would like me to pray. Now say stop, amen, or help" + "</speak>";
	}
    var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.SSML
        };
    var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.SSML
        };
        // For the repromptText, play the speechOutput again
    response.ask(speechOutput, repromptOutput);       
}

/////LUMINOUS END/////
/////LUMINOUS END//////
/////LUMINOUS END/////
/////LUMINOUS END//////
/////LUMINOUS END/////



/////SORROWFUL/////
/////SORROWFUL/////
/////SORROWFUL/////
/////SORROWFUL/////
/////SORROWFUL/////



function handleSorrowfulMysteryIntent(intent, session, response) {
console.log("The mystery attribute is: " + session.attributes.mystery + "The prayer count attribute is: " + session.attributes.prayercount);
    
    var repromptText = "<speak>" + "To continue praying the mystery please say. Amen. To pray a different mystery, please say stop. and then say the mystery you would like me to pray. Now, say stop, amen, or help" + "</speak>";
    var speechText = "";
    var utterance = "";
    var user_utterance = "";
    if (intent.slots)
    {
    	utterance = intent.slots.Utterances.value;
    	user_utterance = utterance.toLowerCase(); 
    }
    
    session.attributes.mystery = 'Sorrowful';
    console.log("User Utterance: " + user_utterance);
    if ( (user_utterance == 'amen' || user_utterance == 'pray for us' || user_utterance == 'continue') || (session.attributes.prayercount === 0) ){
        if (session.attributes.mystery === 'Sorrowful'){
            console.log("I am inside the Luminous Mystery");
            switch(session.attributes.prayercount){
                case 0: 
                    console.log("I am inside the SWITCH" + PRAYER_INDEX.indexOf("Our Father"));
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("The Sign of the Cross")].prayer + "</speak>"
                    session.attributes.prayercount = 1;
                    break;
                case 1:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Apostles Creed")].prayer + "</speak>"
                    session.attributes.prayercount = 2;
                    break;
                case 2:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Church")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 3;
                    break;
                case 3:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Faith")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 4;
                    break;
                case 4:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hope")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 5;
                    break;    
                case 5:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Charity")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 6;
                    break; 
                case 6:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 7;
                    break; 
                case 7:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("First Sorrowful")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer +"</speak>"
                    session.attributes.prayercount = 9;
                    break; 
                /**case 8:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 9;
                    break;*/
                case 9:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 10;
                    break;
                case 10:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 11;
                    break;
                case 11:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 12;
                    break;
                case 12: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 13;
                    break;
                case 13:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 14;
                    break;    
                case 14:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 15;
                    break;   
                case 15:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 16;
                    break;
                case 16:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 17;
                    break;
                case 17:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 18;
                    break;        
                case 18:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 19;
                    break;    
                case 19:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 20;
                    break; 
                case 20:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 21;
                    break;     
                case 21:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Second Sorrowful")].prayer +  PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 23;
                    break; 
                /**case 22:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 23;
                    break;*/
                case 23:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 24;
                    break;
                case 24:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 25;
                    break;
                case 25:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 26;
                    break;
                case 26: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 27;
                    break;
                case 27:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 28;
                    break;    
                case 28:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 29;
                    break;   
                case 29:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 30;
                    break;
                case 30:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 31;
                    break;
                case 31:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 32;
                    break;        
                case 32:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 33;
                    break;    
                case 33:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 34;
                    break; 
                case 34:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 35;
                    break;
                case 35:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Third Sorrowful")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 37;
                    break;
                /**case 36:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 37;
                    break;*/
                case 37:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 38;
                    break;
                case 38:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 39;
                    break;
                case 39:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 40;
                    break;
                case 40: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 41;
                    break;
                case 41:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 42;
                    break;    
                case 42:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 43;
                    break;   
                case 43:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 44;
                    break;
                case 44:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 45;
                    break;
                case 45:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 46;
                    break;        
                case 46:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 47;
                    break;    
                case 47:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 48;
                    break; 
                case 48:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 49;
                    break; 
                 case 49:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fourth Sorrowful")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 51;
                    break; 
                /** case 50:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 51;
                    break; */
                case 51:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 52;
                    break;
                case 52:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 53;
                    break;
                case 53:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 54;
                    break;
                case 54: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 55;
                    break;
                case 55:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 56;
                    break;    
                case 56:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 57;
                    break;   
                case 57:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 58;
                    break;
                case 58:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 59;
                    break;
                case 59:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 60;
                    break;        
                case 60:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 61;
                    break;    
                case 61:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 62;
                    break; 
                case 62:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 63;
                    break; 
                case 63: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fifth Sorrowful")].prayer + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 65;
                    break; 
                /** case 64:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 65;
                    break;*/
                case 65:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 66;
                    break;
                case 66:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 67;
                    break;
                case 67:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 68;
                    break;
                case 68: 
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 69;
                    break;
                case 69:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 70;
                    break;    
                case 70:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 71;
                    break;   
                case 71:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 72;
                    break;
                case 72:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 73;
                    break;
                case 73:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 74;
                    break;        
                case 74:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 75;
                    break;    
                case 75:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 76;
                    break; 
                case 76:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Fatima Prayer")].prayer + "</speak>"
                    session.attributes.prayercount = 77;
                    break;
				case 77:
                    speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Holy Queen")].prayer + "</speak>"
                    session.attributes.prayercount = 78;
                    break;
                case 78:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("The Breviary")].prayer + "</speak>"
                    session.attributes.prayercount = 79;
                    break;
                case 79:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Holy Father")].prayer + "</speak>"
                    session.attributes.prayercount = 80;
                    break;
				case 80:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 81;
                    break;
                case 81:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 82;
                    break;
                case 82:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 83;
                    break;
                case 83:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Bishop")].prayer + "</speak>"
                    session.attributes.prayercount = 84;
                    break;
                case 84:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 85;
                    break;
                case 85:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 86;
                    break;
                case 86:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Glory Be")].prayer + "</speak>"
                    session.attributes.prayercount = 87;
                    break;     
                case 87:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Souls in Purgatory")].prayer + "</speak>"
                    session.attributes.prayercount = 88;
                    break;     
                case 88:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Our Father")].prayer + "</speak>"
                    session.attributes.prayercount = 89;
                    break;     
                case 89:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "</speak>"
                    session.attributes.prayercount = 90;
                    break;     
                case 90:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("Hail Mary")].prayer + "Rest in peace" + "</speak>"
                    session.attributes.prayercount = 91;
                    break;                                            
                case 91:
                	speechText = "<speak>" + PRAYERS[PRAYER_INDEX.indexOf("The Sign of the Cross")].prayer + "</speak>"
                    break;     

            }
        }    
	}	
	else
	{
		var repromptText = "<speak>" + "To continue praying the mystery please say. Amen. To pray a different mystery, please say stop. and then say the mystery you would like me to pray. Now, say stop, amen, or help" + "</speak>";
        var speechText = "<speak>" + "I didn't understand what you just said. To continue praying the mystery please say Amen. To pray a different mystery please say stop and then say the mystery you would like me to pray. Now say stop, amen, or help" + "</speak>";
	}
    var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.SSML
        };
    var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.SSML
        };
        // For the repromptText, play the speechOutput again
    response.ask(speechOutput, repromptOutput);       
}

/////SORROWFUL END/////
/////SORROWFUL END/////
/////SORROWFUL END/////
/////SORROWFUL END/////
/////SORROWFUL END/////

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the WiseGuy Skill.
    var skill = new HolyRosary();
    skill.execute(event, context);
};