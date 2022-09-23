import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../src/App";

const PORT = 8000;

const app = express();
const context = {};

const response = {
  body: {
    treks: [
      {
        id: "1",
        title: "Har ki Dun Trek",
        meta_title: "Book Har ki Dun Trek 2021, Uttarakhand India",
        meta_keywords:
          "har ki dun,har ki doon,har ki dun trek package,har ki dun trek,har ki doon valley,har ki dun valley,har ki doon trekking,har ki dun trekking,har ki dun trek solo,har ki dun altitude,har ki dhun,har ki dun trek uttarakhand, book har ki dun trek, book har ki dun trek uttarakhand India, har ki dun India, ",
        meta_desc:
          "Har ki Dun may be a cradle shaped valley set at a height of 3566 mts within the heart of Govind Ballabh Pant park.",
        content:
          "Har ki Dun may be a cradle shaped valley set at a height of 3566 mts within the heart of Govind Ballabh Pant park. Har ki Dun Valley offers spectacular views of untouched valleys within the faraway lands of Garhwal Himalayas. it's one among the foremost beautiful places in India offering numerous trekking excursions.\nSurrounded by snow-covered peaks and alpine vegetation, Har-ki-Dun is, handily , one the foremost beautiful trekking destination that showcases the unprecedented natural great thing about Uttarakhand. One glance at this hidden valley and it looks like a landscape on a canvas. No wonder it's one among the foremost popular trekking destinations in Uttarakhand – both in summer also as winter season.\nTrekkers think when it involves great treks you can’t beat treks like Rupin Pass or Buran Ghati. And once we mention Har Ki Dun with Ruinsara, they think it's a poor cousin. That’s making an enormous mistake.\nThe Har Ki Dun trek with Ruinsara is one among the simplest complete treks.<br /><br />\nOne of the simplest things about Har Ki Dun – Ruinsara Tal Trek is that it are often done almost eight months during a year.<br />\nStarting within the spring month of March, you'll trek through the summer until late June. Then the monsoon arrives, shutting down the Govind Pashu Vihar Sanctuary for about 3 months.\nThereafter the trekking season resumes in September continuing till mid January next year. The heavy snow laden trail thereafter makes it impossible to trek for the remainder of the winter until later in Spring.<br />This trail isn't difficult on the legs which makes it just the proper adventure especially in comparison to other summer treks.\nWith Ruinsara added on Har Ki Dun, an honest trek becomes great. one among the foremost complete treks that you simply will possibly do.the trail from Rainbasera to Ruinsara takes you into the guts of a narrow valley, where suddenly you see the large lake of Ruinsara. it's an alpine lake fed by snow patches with green, grassy shores.\nIt is stunning to only sit on the banks of the lake, within the solitude of snowy mountain peaks.<br /><br />\nOn the return, Devsu thatch has got to be the simplest kept secret of the trek. nobody knew that such exquisite clearings could exist right within the middle of a thick forest — that too in such multitude of layers.\nIf we are fascinated by the grasslands and clearings of Kashmir, Devsu thatch is probably even better than a number of them! Devsu isn't small either. To explore Devsu fully will take a few of hours a minimum of .\n<br /><br />Before we start , here are some quick facts about Har Ki Dun – Ruinsara Tal trek<br /><br/>\n– The Har Ki Dun – Ruinsara Tal may be a 70 km trek hiked over a period of seven days (+2 days to and from the bottom camp – Sankri) within the Himalayas.<br />\n– The trail located in Uttarakhand takes you to a number of the foremost pristine parts of Govind Pashu Vihar park and Sanctuary.<br />\n– the bottom camp of the trek, Sankri, may be a 10 hour journey from Dehradun. Sankri is additionally the bottom camp for other treks like Kedarkantha, Phulara Ridge, and Bali Pass.<br />\n– If you’re a beginner to a Himalayan trek, Har Ki Dun – Ruinsara Tal may be a good selection . It fits the bill for people eager to trek solo too.",
        itinerary: "",
        background_image:
          "https://get-a-trek-static.s3.amazonaws.com/treks/har-ki-dun-bg.jpg",
        url: "/treks/kedartal-trek",
        thumbnail_image:
          "https://get-a-trek-static.s3.amazonaws.com/thumbnails/har-ki-dun-tb2.jpeg",
        thumbnail_alt: "Har ki dun trek Uttarakhand",
        duration: "8 Days",
        difficulty: "Moderate",
        altitude: "11,811 ft",
        time_to_visit: "March - June, Sept - Jan",
      },
      {
        id: "2",
        title: "Brahmatal Trek",
        meta_title: "Book Brahmatal trek 2021, Uttarakhand India",
        meta_keywords:
          "Brahmatal,Brahmatal trek package,Brahmatal trek,Brahmatal lake,brahmatal trek distance,Brahmatal trekking,Brahmatal trek solo,brahmatal trek in winters,Brahmatal trek altitude,Brahmatal trek uttarakhand, book Brahmatal trekking, book Brahmatal trek uttarakhand India, Brahmatal trek India ",
        meta_desc:
          "Such treks are the trekkers favourites beacuse the mountain views they provide. Consider Chaukhambha from Deoriatal Chandrashila or Bandarpoonch from Dayara Bugyal.",
        content:
          "Such treks are the trekkers favourites beacuse the mountain views they provide. Consider Chaukhambha from Deoriatal Chandrashila or Bandarpoonch from Dayara Bugyal. It's difficult to seek out such magnified views of massive mountains like these. However, Brahmatal may be a trek that takes the cake. It's a view that beats all of these! Right your second day, you climb out of lovely rhododendron and oak forest to ascertain a white wall of the Trishul massif.\n       <br /><br />Brahmatal provides a bird's eye view of the Himalayas with Mt. Trishul and Nanda Ghunti, The view of the awesome Roopkund Lake and ample opportunities to capture the awesomeness of snow-covered peak with their camera. For avid nature photographers, Brahmatal offers tons of opportunities to capture nature at its best. The Brahmatal trek takes one through beautiful valleys, hushed hamlets, streams, and conifers, and oak forests. In winter, the region is roofed during a sheath of snow and offered an unparalleled Himalayan view.<br /><br /> Brahmatal trek climbs to 12,250 feet and that we rate it as moderate. A moderate rating refers to marginally longer trekking days with a couple of steep climbs in between. So, Brahmatal trek may be a notch harder than the easy-moderate treks like Kedarkantha and Dayara Bugyal. But it's easy exits and there are not any technical sections.Coming to the small print , you'll cover a complete of 24 km in three days during which you'll gain approximately 4,650 feet. On a mean , you'll trek 7 kms a day , which can include ascents and descents. In winters, you'll climb this trail buried in knee-deep snow. Although it doesn't require support of a technical staff, you'll need proper safety equipment to barter it.<br/><br /> So, when talking about safety, there are two belongings you got to confine mind — endurance and trekking in snow. Like other high-altitude treks, being physically fit may be a must for otherwise you'll miss out on the sweetness of this trek thanks to fatigue. Click here to understand the way to get fit the Brahmatal trek. When it involves safety, there's one section you would like to take care about, especially if you're trekking to Brahmatal in winters. It is the Steep snow section near the height (in winter season): Your final high altitude camp before you attempt the Brahmatal top is Brahmatal or Tilandi. As you exit of the campsite early within the morning, the snow goes to be hard, having frozen overnight. This snow section continues until you get to Brahmatal top, getting steeper as you approach the summit.<br /><br /><h4>Here are some important safety tips for Brahmatal trek:</h4> While climbing to the height through the thick snow, make sure you wear your microspikes. Hard snow is extremely susceptible to slips. Alittle slip may result in injuries sort of a ligament tear, a sprained ankle or maybe a fracture. Always put your foot on footholds made by earlier trekkers. Look out for deep footholds. Don't attempt to make new paths of your own.<br /><br /> When most treks within the Himalayas shut during peak winters – January and February, Brahmatal stays accessible. It remains open from December to February then into spring. And that’s a treat because winter snow is heavenly on Brahmatal trek. Although it makes the trek a notch harder. But the experience remains worthwhile. In the winters, oak and rhododendron trees looks amzing a nd this happens as soon as you depart from Lohajung.<br /><br /> Snow is beauty but, the view of the frozen Bekaltal lake is mesmerising. Standing by it gives the impression of being frozen in time. But take care about stepping on this frozen lake. Counting on the month, the ice may or might not be hard enough to support your weight. Another highlight of winters is camping on the snow at Tilandi with mesmerising sunrise and sunset. Unlike autumn, now the colourful colours are reflected on the white, snowy landscape.<br /><br /> On the flip side, Brahmatal lake or top might not be accessible within the peak winters thanks to snow. But no matter that fact, you'll be ready to witness the sweetness of this trek from the ridge and therefore the Tilandi campsite. And that’s fulfilling in itself.",
        itinerary: "",
        background_image:
          "https://get-a-trek-static.s3.amazonaws.com/treks/brahmatal-trek-bg.jpg",
        url: "/treks/brahmatal-trek",
        thumbnail_image:
          "https://get-a-trek-static.s3.amazonaws.com/thumbnails/brahmatal-trekking.jpg",
        thumbnail_alt: "Brahmatal trek Uttarakhand",
        duration: "5 Days",
        difficulty: "Moderate",
        altitude: "12,250 ft",
        time_to_visit: "Oct - April",
      },
      {
        id: "3",
        title: "Valley of Flowers",
        meta_keywords:
          "valley of flowers,valley of flowers trek,valley of flowers national park,book valley of flowers trek,valley of flowers trekking,hemkund sahib trekking, valley of flowers trek package, book hemkund sahib trek, hemkund sahib trek,best time to visit valley of flowers,phoolo ki ghati,antelope valley poppy,tulips of the valley,valley of flowers season,valley of flowers altitude,valley of flowers best time,",
        meta_title: "Book Valley of Flowers trek 2021, Uttarakhand India",
        meta_desc:
          "The Valley of Flowers trek is India’s one of the hottest treks within the Himalayas. People that haven’t even stepped within the Himalayas, have heard about the Valley of Flowers trek.",
        content:
          "The <strong>Valley of Flowers</strong> trek is India’s one of the hottest treks within the Himalayas. People that haven’t even stepped within the Himalayas, have heard about the Valley of Flowers trek.<br /><br /> But there's a solid reason behind Valley of Flower’s legendary popularity – it's one among India’s oldest known treks.<br /><br /> In 1980, Indian government created the Valley of Flowers park , and later in 2002, it had been recognized as a UNESCO World Heritage Site. This pushed Valley of Flowers on the bucket list of trekkers from around the world. Having said that, you want to note that Valley Of Flowers trek isn't easy. It's a moderate level trek, with slightly longer trekking days and a steep ascent to Hemkund Sahib which will challenge your endurance.<br /><br /> When you stand at the entry of the valley you see before you a vibrant carpet laid out. The valley is a minimum of a few of kilometres wide and quite 10 kilometres long. You'll get to see the carpet with waves of pinks, blues and yellows flowing along side the breadth and width.<br /><br /> A narrow path in between the flowers beckons you to travel deeper. You now start seeing a spread of flowers. Not only in colours but in shapes, sizes, textures and smell.<br /><br /> The gates to Valley of Flowers open at the start of June. But the simplest time to go to is between July and September. You'll extend it to the top of September. Even within the best months between July and September, the trek isn't an equivalent monthly. In July expect tons of greenery. you'll also find a touch of snow till rains begin fully swing. But there won’t be many flowers until mid-July. Since the trek climbs to such a high altitude (~14,000 ft), it retains snow even in July. Only later in July, the rain washes off the snow.<br /><br /> Monsoon also starts setting in in July. But it doesn’t rain much within the half. Monsoon gains momentum within the last half of July. Snow too starts getting washed off by then.<br /><br /> The Valley Of Flowers starts blooming – within the true sense – from mid-July onwards. And if there's a perfect time to try this trek, it's to be from mid-July to mid-August.<br /><br /> In August, monsoon clouds hang low and wash over the whole valley. Maximum flowers within the valley bloom during this era . While you get an honest amount of rain at Govindghat during this point , at the upper altitudes it turns into a drizzle.<br /><br /> Flowers begin wilting by the last half of August and by September only a few flowers are left. But there’s a special quite beauty to the present month of retreating monsoon. Skies start clearing up and you witness some clear mountain views.<br /><br /> But September is additionally the time when the gang within the valley starts thickening, During this month, pilgrims flock to go to the Gurudwara of Hemkund Sahib.<br /><br /> Temperature on the Valley of Flowers trek: it's not very cold on the Valley of Flowers and Hemkund Sahib trek because the trek is completed within the post-summer months of July, August and early September.<br /><br /> A second reason is that the very best place at which we stay overnight is Ghangria which may be a shade below 10,000 ft.<br /><br /> Having said that, the trek is sort of cold for somebody coming in anywhere else but from the Himalayan villages. On the trek you'll expect night and minimum temperatures to be about 3 – 5 degrees. Day temperatures are expected to be between 10 – 18 degrees supported precipitation and cloudiness of the day.<br /><br /> Rainfall on the Valley of Flowers trek: Monsoons officially reach Uttarakhand by the second week in July. But we don’t see much rain until the primary half July. it's very pleasant trekking within the valley. After mid-July, we see regular rains which continue all the way into August.<br /><br /> But don't fret over the rains. On the trek, the rain is usually manageable by wearing your rain gears sort of a poncho and a rain pant. We also see that the primary half the day usually sees lighter rain as compared to the evenings and nights. Our trek days start early everyday and end by early afternoon.<br /><br /> Our strict start times and turnaround times keep us out on the trail during the simplest parts of the day and back within the safety of our lodge when the rains become heavy.<br /><br /> In the end of August, the rains start to retreat. You get clearer skies and crisp views.<br /><br /> Snow on the Valley of Flowers trek: The Valley of Flowers trek isn't timed for its snow experience but early within the season you are doing get to steer on snow bridges and snow patches. The trail to the valley of flowers has snow bridges formed over the river and at many places, you walk right beside the snow bridges.<br /><br /> On the trail to Hemkund too, you get a couple of snow patches to cross early within the season. Expect to ascertain melting snow flowing into Hemkund Sahib early in July. Most of the snow is gone once the rains set in by August.",
        itinerary: "",
        background_image:
          "https://get-a-trek-static.s3.amazonaws.com/treks/valley-of-flowers.jpg",
        url: "/treks/valley-of-flowers",
        thumbnail_image:
          "https://get-a-trek-static.s3.amazonaws.com/thumbnails/valley-of-flowers-trek-th.jpeg",
        thumbnail_alt: "Valley of flowers Uttarakhand",
        duration: "5 Days",
        difficulty: "Moderate",
        altitude: "14,400 ft",
        time_to_visit: "July-Sept",
      },
      {
        id: "4",
        title: "Dayara Bugyal Trek",
        meta_keywords:
          "dayara bugyal trek,dayara bugyal,bugyal,book dayara bugyal trek,dayara bugyal trekking, dayara bugyal trek packages,dayara bugyal weather,bugyal trek,dayara bugyal winter trek,dayara bugyal altitude,dayara bugyal trek distance",
        meta_title: "Book Dayara Bugyal trek 2021, Uttarakhand India",
        meta_desc:
          "The perfect trek for long weekends in Uttarakhand India, Dayara Bugyal are often an ideal start for beginners. This region receives heavy snowfall during winters.",
        content:
          "The perfect trek for long weekends in Uttarakhand India, Dayara Bugyal are often an ideal start for beginners. This region receives heavy snowfall during winters. The trek passes through open land and dense forest at different places of lush green meadow.<br /><br /> Most of the trekkers start their trek from Barsu village and that they trek down via Raithal to ascertain the scenic great thing about both the routes of Dayara Bugyal. It is so big and wide that sometimes you can't see the top of the whiteness. In winter people want to ascertain snow. Seeing it in such a good canvas as Dayara may be a rarity. What's more rare is that the sight of Mt Banderpoonch and Black peak towering almost 21,000 feet over Dayara. Seeing these mountains just beginning of the snow expanse of Dayara is that the reason why anyone must do this trek. You get big snow expanse only you climb to very high altitudes.<br /><br /> In Dayara, climbing to about 12,000 feet gets you to the present viewpoint . It's quite adventure to urge there. It needs effort to climb through the forests, the land is covered by a carpet of snow. <br /><br />The Dayara Bugyal trek in winter is a beautiful vast landscape. Just think yourself at an elevation of 3048 mts and you're sitting in a beautiful grassland looking steadily upon the amazing Himalayan peaks with friends by your side sipping tea and eating maggi. The chilliness of the place enhancing the aroma and taste of the tea with beautiful view of forests ahead of you. Now convert this imagination into reality by happening a trek to Dayara Bugyal. <br /><br /> The persons who also loves doin skiing visit Dayara Bugyal in winters because the area got heavy snowfall during winters. The simplest season to go to Dayara Bugyal is from May to November but tourists visit this place during winters also , mainly because it receives snowfall. Dayara Bugyal is fashionable the travellers for its vast expanse of lush green meadow. The opposite popular scenic spot that you simply can visit while traveling to Dayara Bugyal is Barnala Tal situated around Oak trees. You'll can make a road trip to Harsil and Gangotri Temple also while traveling to Dayara Bugyal. <br /><br/><h4>Activities you can do in Dayara Bugyal</h4><strong>Trekking </strong>: Dayara Bugyal trek is ideal choice for beginners because the trek route is straightforward to traverse as compared to other difficult treks. With verdant valleys and sparking streams and vivid flora and fauna that one encounters, it's no surprise that Dayara Bugyal is one among the foremost beautiful treks in Uttarakhand.<br /><br /><strong>Village Tourism</strong>: Barsu village is that the last village which one encounters before starting their trek to Dayara Bugyal. It's also considered because the base camp of Dayara Bugyal. One can walk round the village and study their way of life, customs and festivals en-route to Bedni Bugyal.<br /><br /><strong>Photography</strong>: The entire route of Dayara Bugyal is worth clicking together with your camera because the whole route is laden with beautiful flowers and shrubs and surrounded by gorgeous valleys. For nature-photographers, Dayara Bugyal offers lot of opportunities to capture nature at its best.<br /><br/> Dayara Bugyal Travel Tips Though the trek to Dayara Bugyal is sort of easy it's still knowing prepare your body for the trek a couple of days before your trek. Running, cycling and swimming – all help improve cardiovascular stamina. It's advisable to possess an experienced guide to accompany you on your trek. He/she would know the route well and assist you valid going astray. Trekking alone, especially when the person doesn’t have enough experience, might be risky. Also, confirm you've got informed someone about your outing back home.",
        itinerary: "",
        background_image:
          "https://get-a-trek-static.s3.amazonaws.com/treks/dayara-bugyal-trek-bg.jpeg",
        url: "/treks/dayara-bugyal-trek",
        thumbnail_image:
          "https://get-a-trek-static.s3.amazonaws.com/thumbnails/dayara-bugyal-trek-th.jpeg",
        thumbnail_alt: "Dayara Bugyal trek Uttarakhand",
        duration: "5 Days",
        difficulty: "Moderate",
        altitude: "11,686 ft",
        time_to_visit: "April-June",
      },
      {
        id: "5",
        title: "Benog Tibba Trek",
        meta_keywords:
          "benog tibba, benog hill,treks in mussoorie,trek in mussoorie,book benog tibba trek, benog tibba trek packages, benog tibba trekking, george everest mussoorie, benog tibba trek",
        meta_title: "Book Benog Tibba trek 2021, Uttarakhand India",
        meta_desc:
          "Benog Hill or Benog Tibba is at the 250 mts height. It is one among the very best peaks in Mussoorie region, Uttarakhand India.",
        content:
          "Benog Hill or Benog Tibba is at the 250 mts height. It is one among the very best peaks in Mussoorie region, Uttarakhand India. Surrounded by the gorgeous Doon Valley(Dehradun Valley) to the south, the rich Yamuna & Assan Barage to the west, the enchanting Mussoorie hills to the east, and therefore the mighty Himalayas to the north, Benog Hill offers panoramic views of the nature’s finest scenes and leaves you in awe. A small temple dedicated to Jwala Devi, an incarnation of Goddess Durga stands at the height enhancing the sweetness and calm of the place.<br /><br /> The trail is dominated by pine trees, because of the afforestation efforts by the Forest Department. To steer through a pine scented forest, dried leaves crunching under your feet may be a reward well worth the effort on this steep trail. Although the forest is essentially pine, there are various different flora mushrooming in between also.<br /><br /> As the trek is inside Benog Wildlife Sanctuary, it's known to be a home to varied birds and wildlife.<br /><br /> The chirping of birds are often heard very clearly as you rehearse this forested trail. Sudden sounds of a bird flying might scare you! you'll spot Black headed Jay, Brown fronted woodpecker, Verditer flycatcher, Blue whistling thrush, Great Hill Barbet, and Russet sparrow. For a birder, this trail may be a treat. Once you're at the summit, you see the expanse of Yamuna valley lying below you.<br /><br /> The snow capped peaks of Garhwal Himalayas stand tall within the distance. within the mercy of a transparent day, you'll ready to see Trishul, Nanda Ghunti, Nanda Devi and Dronagiri. you'll even spot Nag Tibba hill ahead. This vantage view may be a worthy reward for the day’s trek!",
        itinerary: "",
        background_image:
          "https://get-a-trek-static.s3.amazonaws.com/treks/benog-tibba-trek-bg.jpg",
        url: "/treks/benog-tibba-trek",
        thumbnail_image:
          "https://get-a-trek-static.s3.amazonaws.com/thumbnails/benog-tibba-trek-th.jpg",
        thumbnail_alt: "Benog tibba trek Uttarakhand",
        duration: "2 Days",
        difficulty: "Easy",
        altitude: "7,372 ft",
        time_to_visit: "Anytime",
      },
      {
        id: "6",
        title: "Gidara Bugyal Trek",
        meta_title: "Book Gidara Bugyal trek 2021, Uttarakhand India",
        meta_keywords:
          "gidara bugyal trek,gidara bugyal,bugyal,book gidara bugyal trek, gidara bugyal trek packages,gidara bugyal trekking, gidara trekking,gidara bugyal weather,bugyal trek,gidara bugyal winter trek,gidara bugyal altitude,gidara bugyal trek distance,",
        meta_desc:
          "Gidara Bugyal is situated near the Dayara Bugya at a distance of 20 kms which is yet to be explored.",
        content:
          "Gidara Bugyal is situated near the Dayara Bugya at a distance of 20 kms which is yet to be explored. Not many have reached on this high altitude meadow, its time to line foot thereon. While Dayara Bugyal makes a simple weekend trek, Gidara Bugyal is right for serious trekkers.<br /><br /> Most of the trail goes through lush green high altitude meadow booming with flowers by trekking on a gradually ascending but easy trail.<br /><br /> Geographically, Gidara is about 15 km faraway from Dayara. It's also at a rather higher elevation. which suggests that the mountains you see from Dayara – Bandarpoonch, Gangotri I & III, Draupadi Ka Danda, Jaonli, Srikanth – look much closer and far grander from here. it's especially fascinating to ascertain these mountain faces from a rather different perspective.<br /><br /> Having said that, the Gidara Bugyal trek may be a moderate one. It's treacherous paths, steep ascents and descents. you would like to organize well for this trek.<br /><br /> The ridge walk to the Gidara Top is definitely one among the simplest highlights of this trek. If you're lucky and there are not any clouds, the view from here may be a spellbinding panorama. Right ahead of you're the Gangotri ranges – Gangotri I, II, Jaonli, Draupadi Ka Danda. Srikanth stands prominently among them. On your left, you see the indomitable Bandarpoonch etched within the sky. the whole Gidara meadows, right to the very end, are often seen from this ridge!<br /><br /> While tons are often said about the Gidara meadows themselves, the climb to Rikoda under the shade of the forest is sort of pleasant. The flora on the trail is sort of dense. And albeit the trail is sort of steep and hard on your legs, you can’t help but be awed by the dense foliage. You travel by a stunning waterfall also as Gujjar settlements on this climb. It’s quite fascinating to urge a peek into their lifestyle as you trek along.<br /><br /> Gidara Bugyal may be a trek blessed unusual but striking campsites. Thalotya may be a vision. it's set during a narrow valley, with a stream gently flowing through. the whole slope of Thalotya is lush, crammed with lavender pink rhododendrons! Then there's Dokrani, a clearing sitting on the slope of a mountain with a view of the Gangotri massif right opposite.<br /><br /> The sunset from Dokrani campsite is magical. the sunshine plays with Gangotri massif and therefore the valley the camp overlooks.<br /><br /> The Gangnani predicament springs are something you'll travel by on the thanks to Bangeli. Devotees on the thanks to Gangotri usually make a stop here to refresh themselves. These hot springs are very clean and well maintained. It makes for an exquisite rejuvenation after your trek.<br /><br /> While Gidara Bugyal is understood within the trekking circuit, not many of us realize the Gidara Bugyal trek outside trekking circles because this trek hasn’t been easily accessible. It’s tucked away in Uttarakhand and therefore the basecamp, Bhangeli, is 1.5 kms faraway from the road.<br /><br /> If you're driving from Dehradun, drive towards Uttarkashi, this may take you about 4 hours. You could do lunch here. From here, drive towards Bhatwari, take the proper towards Gangotri, and continue on an equivalent route. Before you reach Gangnani bridge, there's alittle inconsequential road that results in the left. Take this turn towards the Gangnani hot springs. Continue on the road and you'll reach a roadhead. this is often the last point for vehicles. Lack of data about from where this trek are often accessed made it one among the simplest kept secrets of the trekking world.<br /><br /> June and September are great months to trek in Gidara Bugyal. In June, you'll find patches of meadows buried under snow. And in September, when the snow has melted, autumn is setting in, the trek flaunts a vibrant golden-brown colour.<br /><br /> Temperature in June are going to be warmer than that in autumn. But autumn is understood for brilliant blue skies which will offer great mountain views, especially of the Bandarpoonch range.",
        itinerary: "",
        background_image:
          "https://get-a-trek-static.s3.amazonaws.com/treks/gidara-bugyal-trekking.jpeg",
        url: "/treks/gidara-bugyal-trek",
        thumbnail_image:
          "https://get-a-trek-static.s3.amazonaws.com/thumbnails/gidara-bugyal-trek-th.jpeg",
        thumbnail_alt: "Gidara Bugyal trek Uttarakhand",
        duration: "6 Days",
        difficulty: "Moderate",
        altitude: "13,900 ft",
        time_to_visit: "June-Sept",
      },
      {
        id: "7",
        title: "Kedarkantha Trek",
        meta_title: "Book Kedarkantha trek 2021, Uttarakhand India",
        meta_keywords:
          "kedarkantha trek,kedarkantha,book kedarkantha trek,kedarkantha trekking, kedarkantha trek packages,kedarkantha trek weather,kedarkantha trek,kedarkantha winter trek,kedarkantha trek altitude,kedarkantha trek distance",
        meta_desc:
          "Kedarkantha trek, Uttarakhand is a 6-day long trek in Govind Pashu Vihar park in Uttarakhand from bottom to back. Kedarkantha trek is definitely one among the foremost popular treks in India",
        content:
          "Kedarkantha trek  a 6-day long trek in Govind Pashu Vihar park in Uttarakhand from bottom to back. Kedarkantha trek is definitely one among the foremost popular treks in India — popular amongst seasoned trekkers and beginners alike.<br /><br /> There are many reasons why it's a really popular trek to try to to within the Indian Himalayas. The foremost important of them is that this — the summit climb.<br /><br /> The summit climb of Kedarkantha may be a very rewarding one. Right from the bottom camp of the trek, the summit looms large. As you begin your trek within the early hours of the morning and steadily climb up the steep slope, the planet exposes around you.<br /><br /> The climb isn't easy. the whole stretch is steadily steep. As you meet up with to the summit, it gets tricky also . But the large mountains of the upper Himalayas keep you company until you finally reach the summit.<br /><br /> As you stretch yourself and absorb the views of the Himalayas from the summit, you are feeling a robust sense of satisfaction and accomplishment.<br /><br /> Very few treks offer an equivalent adventure, making it popular among beginners for its finest summit climb. Outside the summit, the trek is additionally unique for its beautiful clearings. Very rarely you'll find stunning clearings on a trek that creates way for a few rest spots and delightful campsites. This trek is crammed with clearings altogether the various routes. What more, the clearings are just at the proper locations, supplying you with beautiful vantage points to understand the trek and its views.<br /><br /> The third biggest reason this trek is exclusive is its beautiful forests. All three routes have beautiful diverse forests which will totally immerse you in. If you're not careful, you'll stray in them.<br/> It is one among the foremost beautiful drives you'll ever need to any trek. The 18 km stretch of the dense pine forest after Purola and therefore the drive through the Mori valley alongside River Tons will stick with you for an extended time, don't miss to observe out for them.<br /><br />Very rarely will you get to experience how the local people live. during this trek, you get to ascertain it. you'll be spending both your first night and therefore the last night in homestays in two villages – Gaichawan Gaon and Kotgaon.<br /><br /> Although they're on the brink of one another , their houses look different, they dress different and their lifestyle may be a little different. You'll get to experience this up close.<br /><br /> When you are within the forests of Kedarkantha, especially the stretch from Kotgaon to the summit, you'll feel this sense of oneness together with your surroundings more strongly.<br/><br /> Kedarkantha trek has many such clearings on all sides. No other trek offers such clearings. I even have done almost 11 treks thus far and that i am yet to seek out a trek that has such beautiful clearings.<br /><br /> In fact, it's one trek within the entire Himalayas, where you've got no dearth of campsites. In fact, one among the explanations we've been ready to open multiple routes during this trek is due to these clearings.<br /><br /> Being a standalone mountain, this trek is blessed multiple routes to succeed in the summit and every one of them are unique and delightful in their own way. this provides everyone the chance to explore this trek within the way we would like to – going with the favored route or choosing the more quieter trail, adapting the route counting on the weather, etc. There are many ways to succeed in the summit.<br /><br /> Kedarkantha trek offers a number of the foremost dramatic sunsets and it's precisely so due to the location of the campsites. Julota and Pukhrola both face the western side of the sky and are both wide hospitable the sky.<br /><br /> The sunsets I even have witnessed have stayed with me so far . All i want to try to to is close my eyes and remember to be transported back there.<br /><br /> The trek is legendary for its summit and is rightly so. First is that, this is often a correct summit marked by cairn. Of all the 12,500 ft treks within the Himalayas, Kedarkantha is one among the 2 summit treks. The remainder are all mostly passes or high points on a variety .<br /><br />This itself is special. Second, is that the route to the summit. As soon as you clear the timber line, the summit is true ahead of you. So, right from the start of the trek, you recognize where you're trekking to and it creates a moment aspiration. This builds the challenge of the trek right from the start of the summit day.<br /><br /> Third, is that the slope. The summit may be a steady climb at almost an inclination of 45 to 60 degrees. At many places, especially in snow, it gets challenging even for knowledgeable trekkers. This again makes the summit climb a rewarding one.<br /><br /> Fourth, is that the views that accompany along. Although the views aren't the foremost prominent or the highlights of the trek, the upper Himalayas do accompany the whole high . This does add a charm to the whole climb giving respite once you take an opportunity .<br /><br /> Best time to go to Kedarkantha trek –<br /> Winter – December to February <br /> Spring – March and April <br /> Summer – May and June <br />Autumn – Mid September to November. <br /><br />Each of those seasons have something very different to supply in terms of terrain, difficulty and weather.<br /><br />Kedarkantha is hottest as a winter trek and it's rightly so. the gorgeous snow covered landscape and an adventurous summit climb especially within the winter can make anyone go weak within the knees.",
        itinerary: "",
        background_image:
          "https://get-a-trek-static.s3.amazonaws.com/treks/kedarkantha-trek.jpg",
        url: "/treks/kedarkantha-trek",
        thumbnail_image:
          "https://get-a-trek-static.s3.amazonaws.com/thumbnails/kedarkantha-trek-th.jpg",
        thumbnail_alt: "Kedarkantha trek Uttarakhand",
        duration: "6 Days",
        difficulty: "Moderate",
        altitude: "12,500 ft",
        time_to_visit: "March-June, Sept-Feb",
      },
      {
        id: "8",
        title: "Nag Tibba Trek",
        meta_title: "Book Nag Tibba Trek 2021, Uttarakhand India",
        meta_keywords:
          "Nag tibba, trek in mussoorie, treks in mussoorie, nag tbbia trek, book nag tibba trek,nag tibba trekking, nag tibba trek packages, nag tibba trek mussoorie,nag tibba trek altitude, nag tibba trek weather, nag tibba trek distance",
        meta_desc:
          "Nag Tibba is also known as the Serpents Peak, it is that the highest peak in lower Himalayas of Garhwal region near Mussoorie.",
        content:
          "Nag Tibba is also known as the Serpents Peak, it is that the highest peak in lower Himalayas of Garhwal region near Mussoorie. It also gives a reputation to the Nag Tibba Range, which is one among the three ranges of Lesser Himalayas, the opposite ranges are Dhauladhar and Pir Panjal.<br /><br /> It is one among the simplest weekend treks which will be commenced by the beginners also as experienced trekkers. A little temple is enshrined atop Capitol Hill, from where one can have a bird's eye view of the whole Banderpunch ranges of the good Indian Himalayas towards the Yamunotri side.<br /><br /> Nagtibba is also known for the camping during spring and summers and one among the foremost suitable trek for winters, when most of the treks are closed thanks to heavy snow. Thanks to its quick access it's one among hottest weekend treks in India.<br /><br /> Nagtibba is found at an altitude of 3025 mts and attracts thousands of tourists per annum. Nagtibba offers majestic scenic beauty and an honest trek for adventure lovers. Nag Tibba experience a salubrious weather throughout the year and is one among the simplest places to camp.<br /><br /> Nag Tibba trek provides the awesome views of the massive peaks of Banderpunch, Swargarohini, Srikanth, Gangotri group of peaks, Black Peak, Kedarnath peak within the north, Doon Valley and therefore the snow-shrouded peaks of Chanabang.<br /><br /> The Nag Tibba trek route may be a circular trek, at some places, you’ll see a totally contrasting landscape having the dense mixed forests of Oak, Rhododendrons, Cedar and Alpine. The trekkers can camp, enjoys bird watching and savour the sweetness of the meandering meadows and thick jungles.<br /><br /> Weekend Trek: It's a perfect weekend trek from Delhi and Dehradun. It's a trekking destination which might be wiped out 2-3 days ranging from Delhi.<br /><br /> Easy and Short Trek: It's one among the simplest trek and best suitable for beginners.<br /><br /> Complete Trek: Offers jungle trail, Himalayan views, Meadows, waterfalls, snow during winterSafety: one among the safest trek, as being on the brink of Mussoorie and Dehradun, with no rivers for floods or doesn't have any history of landslides.<br /><br /> <h4>Nag Tibba Trekking Paths</h4>There are some trekking routes to reach the summit of Nag Tibba.<br><br /><strong>Trek Route 1</strong>: From Devalsari Village (13 kms)The trek to Nag Tibba starts from Devalsari (13 kms) where one can stay Foresh Guest House by taking permission from the Mussoorie Forest Office. You'll trek further for 3 kms to Nag tibba top which offers a wide ranging view of the Himalayas. The route goes through the thick deodar forest and reaches to the remote place with almost no habitation.<br /><br /><strong>Trek Route 2</strong>: From Panthwari Village (8 Kms) this is often the foremost used route for trekkers to succeed in Nag Tibba base camp and summit. Pantwari village is 50 Kms by road from Mussoorie and 85 Kms from Dehradun. It's one the shortest route to succeed in Nag Tibba (just 8 Kms) from Panthwari village. Though the route is is small complicated and requires a guide.",
        itinerary: "",
        background_image:
          "https://get-a-trek-static.s3.amazonaws.com/treks/nag-tibba-trek-bg.jpg",
        url: "/treks/nag-tibba-trek",
        thumbnail_image:
          "https://get-a-trek-static.s3.amazonaws.com/thumbnails/nag-tibba-trek.jpeg",
        thumbnail_alt: "Nag tibba trek Uttarakhand",
        duration: "2 Days",
        difficulty: "Easy",
        altitude: "9,914 ft",
        time_to_visit: "Any time",
      },
      {
        id: "9",
        title: "Chandrashila Trek",
        meta_title: "Book Chandrashila-Tungnath trek 2021, Uttarakhand India",
        meta_keywords:
          "Chandrashila, chandrashila trek,chandrashila-tungnath trek, book chandrashila trek, tungnath trek, book tungnath trek, moon rock chandrashila, tungnath temple, panch kedar, panch kedar uttarakhand india, panch kedar uttarakhand, chandrashila trek packages, tungnath chopta, tungnath trek distance, tungnath trek weather, tungnath trek height",
        meta_desc:
          "Chandrashila that literally suggests the ‘Moon Rock’ is that the summit of the Chandranath Parvat on which the Tungnath temple of Panch Kedar is situated.",
        content:
          "Chandrashila that literally suggests the ‘Moon Rock’ is that the summit of the Chandranath Parvat on which the Tungnath temple of Panch Kedar is situated. The majestic Chandrashila summit may be a viewpoint that provides a heavenly panorama of the great Himalayas.<br /><br />Set within the Kedarnath Wildlife Sanctuary in Uttarakhand, the Deoriatal Chandrashila trek could also be a treat for wildlife lovers. And it is also a superb summit climb (12,083 ft) for people who are beginning to start trekking within the Himalayas. <br /><br />You see, summit climbs are rewarding, and trudge up a mountain for hours during the wee hours. You reach its highest point a bit like the rays of the sun lighten the sky. Everything is below you — the clouds, the hills, the tiny specks of civilization. On a Himalayan trek, you usually see mountain ranges within the space .<br /><br />This is where Deoriatal Chandrashila is special. it isn't an area of Himalayan ranges that you simply simply see. You see all the most summits of Western and Eastern Uttarakhand from the summit. By all, we mean all.<br /><br />Chopta Chandrashila Deoriatal could also be a window into Himalaya’s spring color vibrancy. A well-loved trek for mountain goers of all kinds , this trek flourishes with blossoms, especially rhododendrons red and pink, in summer time while winters are a hazy shade with enough scopes to possess a ball in spilling snow. the whole tour covers a swoop to the Chandrashila Peak, passing by the enchanting Deoriatal lake side, and exposes a gallery of stunning snow peaks all the way. This 5-day plan is unmatched in nature’s beauty, exhilarating challenges, time-efficiency and convenience. The highlights of the trek range from awe-inspiring summit views to warmth of the forest greens, piquing up interests altogether sorts of mountain lovers. you will be a nature treasurer, bird watching amateur, or a shutterbug with a dream of capturing the drama within the highlands, Chopta-Chandrashila-Deorital could also be a trek for all and fails none. <br /><br />The first big stop on the trek comes with Deoriatal. The lake is gripped with forests all around. At a quick distance ahead, the Chaukhamba massif glistens and thus the reflection of it's caught within the crystal-like waters of the lake. The effect is striking. the situation is steeped in myths. As goes the story, the five pandava brothers from the Mahabharata, once thirsty, had come to the waters of Deoriatal and faced a test of wisdom. Camping here the first night under a stardusted sky makes the mellowest of memories on a trek. Next au courant the road of visual ecstasies are the extensive meadows that address snow fields along the because of Chopta. together furthers up the trail, great peaks jump to view—Bandarppoonch, Kedar, and Chaukhamba to call a few of . These stellar features of Garhwal Himalayas promise to urge more elucidated from the zenith of Chandrashila, therefore the motivation isn't lost and one goes on until the highest of the summit stretch at the Tunganath temple. <br /><br />Even though Chopta Chandrashila could also be a high altitude trek, it are often finished almost 6 months within the year. And there are three clear seasons to undertake to to the present trek starting with spring between March and April. After which the trek opens in autumn and goes until December.<br /><br />Post December within the height winter months, the Chopta region receives heavy snowfall. repeatedly the road to Chopta is stop because of snow. The roads there are also highly vulnerable to verglas, making driving dangerous.",
        itinerary: "",
        background_image:
          "https://get-a-trek-static.s3.amazonaws.com/treks/chandrashila-trek.jpg",
        url: "/treks/chandrashila-trek",
        thumbnail_image:
          "https://get-a-trek-static.s3.amazonaws.com/thumbnails/chandrashila-trek-th.jpeg",
        thumbnail_alt: "Chandrashila trek Uttarakhand",
        duration: "4-5 Days",
        difficulty: "Easy",
        altitude: "12,083 ft",
        time_to_visit: "March-May, Sept-Dec",
      },
    ],
    status: true,
  },
  statusCode: 200,
};

app.use(express.static(path.resolve(__dirname, "..", "build")));
app.use("*", (req, res) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <StaticRouter location={req.originalUrl} context={response}>
            <App data={data} />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
