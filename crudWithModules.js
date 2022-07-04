const insertModule=require('./insertDb');
const readModule=require('./readDb');
const updateModule=require('./updateDb');
const deleteModule=require('./deleteDb');
const data=[{"Stock Serial No":1,"IMEI Number":358525086607714,"Current Holder":"Suman lata sharma","Employee ID":2000460,"Current Status of Holder":"Entry Deleted"},{"Stock Serial No":2,"IMEI Number":864115032826555,"Current Holder":"Sarvesh kumari","Employee ID":20171875,"Current Status of Holder":"Transferred"},{"Stock Serial No":3,"IMEI Number":863872038632897,"Current Holder":"Monika","Employee ID":20191919,"Current Status of Holder":"Present"},{"Stock Serial No":4,"IMEI Number":358525086678889,"Current Holder":"Poonam devi","Employee ID":2014022068,"Current Status of Holder":"Present"},{"Stock Serial No":5,"IMEI Number":358525086699976,"Current Holder":"Tablet not alloted","Employee ID":2014069138,"Current Status of Holder":"Tablet not alloted"},{"Stock Serial No":6,"IMEI Number":358525086702226,"Current Holder":"Radha sharma","Employee ID":2020007882,"Current Status of Holder":"Present"},{"Stock Serial No":7,"IMEI Number":864115032826514,"Current Holder":"Sunita rani sharma","Employee ID":20171575,"Current Status of Holder":"Present"},{"Stock Serial No":8,"IMEI Number":351588100131316,"Current Holder":"Nisha malik","Employee ID":20161883,"Current Status of Holder":"Present"},{"Stock Serial No":9,"IMEI Number":358525086700469,"Current Holder":"Seema Tyagi","Employee ID":20142004130,"Current Status of Holder":"Present"},{"Stock Serial No":10,"IMEI Number":358525086676180,"Current Holder":"Ruchi","Employee ID":2013008440,"Current Status of Holder":"Present"},{"Stock Serial No":11,"IMEI Number":358525086679788,"Current Holder":"Charu","Employee ID":2013267225,"Current Status of Holder":"Present"},{"Stock Serial No":12,"IMEI Number":358525086352766,"Current Holder":"Monika manav","Employee ID":20182376,"Current Status of Holder":"Present"},{"Stock Serial No":13,"IMEI Number":358525086604885,"Current Holder":"Tablet not alloted","Employee ID":2017011761,"Current Status of Holder":"Tablet not alloted"},{"Stock Serial No":14,"IMEI Number":358525086352196,"Current Holder":"Archana tripathi","Employee ID":20040917,"Current Status of Holder":"Present"},{"Stock Serial No":15,"IMEI Number":358525086588591,"Current Holder":"Kalpana tomar","Employee ID":2017110319,"Current Status of Holder":"Present"},{"Stock Serial No":16,"IMEI Number":864115032602212,"Current Holder":"Shipra anand","Employee ID":20160009,"Current Status of Holder":"Present"},{"Stock Serial No":17,"IMEI Number":358525086352527,"Current Holder":"Bhawna chaudhary","Employee ID":20050593,"Current Status of Holder":"Present"},{"Stock Serial No":18,"IMEI Number":358525086348947,"Current Holder":"Tablet not alloted","Employee ID":20182028796,"Current Status of Holder":"Tablet not alloted"},{"Stock Serial No":19,"IMEI Number":358525086467150,"Current Holder":"Megha singh","Employee ID":2014085088,"Current Status of Holder":"Present"},{"Stock Serial No":20,"IMEI Number":358525086730805,"Current Holder":"Ansu rani","Employee ID":2014046865,"Current Status of Holder":"Present"},{"Stock Serial No":21,"IMEI Number":358525086604703,"Current Holder":"Manila pahwa","Employee ID":20181796,"Current Status of Holder":"Present"},{"Stock Serial No":22,"IMEI Number":866330030755767,"Current Holder":"Suman baby","Employee ID":20091250,"Current Status of Holder":"Transferred"},{"Stock Serial No":23,"IMEI Number":358525086720913,"Current Holder":"Renu sharma","Employee ID":19970634,"Current Status of Holder":"Present"},{"Stock Serial No":24,"IMEI Number":358525086790304,"Current Holder":"Madhvi sharma","Employee ID":2013014083,"Current Status of Holder":"Present"},{"Stock Serial No":25,"IMEI Number":358525086770033,"Current Holder":"Sandhya","Employee ID":2013324405,"Current Status of Holder":"Present"},{"Stock Serial No":26,"IMEI Number":358525086720392,"Current Holder":"Shubhlaxmi tripathi","Employee ID":2013492300,"Current Status of Holder":"Present"},{"Stock Serial No":27,"IMEI Number":358525086718404,"Current Holder":"Hema joshi","Employee ID":2013005455,"Current Status of Holder":"Present"},{"Stock Serial No":28,"IMEI Number":358525086723172,"Current Holder":"Karuna tyagi","Employee ID":2013221225,"Current Status of Holder":"Present"},{"Stock Serial No":29,"IMEI Number":358525086758293,"Current Holder":"Archana","Employee ID":20072881,"Current Status of Holder":"Present"},{"Stock Serial No":30,"IMEI Number":358525086722158,"Current Holder":"Madhu gautam","Employee ID":21011090329,"Current Status of Holder":"Present"},{"Stock Serial No":31,"IMEI Number":358525086787433,"Current Holder":"Sakshi malik","Employee ID":20160387,"Current Status of Holder":"Present"},{"Stock Serial No":32,"IMEI Number":864115032830169,"Current Holder":"Ranjana devi","Employee ID":19960175,"Current Status of Holder":"Present"},{"Stock Serial No":33,"IMEI Number":358525086608274,"Current Holder":"Poonam tyagi","Employee ID":19980270,"Current Status of Holder":"Transferred"},{"Stock Serial No":34,"IMEI Number":358525086686833,"Current Holder":"Priyanka","Employee ID":2014076269,"Current Status of Holder":"Present"},{"Stock Serial No":35,"IMEI Number":358525086786765,"Current Holder":"Tarun kumar sharma","Employee ID":20195996,"Current Status of Holder":"Present"},{"Stock Serial No":36,"IMEI Number":863872038632947,"Current Holder":"Tablet not alloted","Employee ID":2013052791,"Current Status of Holder":"Tablet not alloted"},{"Stock Serial No":37,"IMEI Number":866991035660615,"Current Holder":"Tablet not alloted","Employee ID":2013120708,"Current Status of Holder":"Tablet not alloted"},{"Stock Serial No":38,"IMEI Number":359418070106191,"Current Holder":"Piyush jaiwal","Employee ID":20180207,"Current Status of Holder":"Present"},{"Stock Serial No":39,"IMEI Number":864115032452345,"Current Holder":"Pooja rani","Employee ID":20161326,"Current Status of Holder":"Transferred"},{"Stock Serial No":40,"IMEI Number":864115031902241,"Current Holder":"Pushplata pathak","Employee ID":20132908,"Current Status of Holder":"Transferred"},{"Stock Serial No":41,"IMEI Number":863872038700579,"Current Holder":"Rinki jindal","Employee ID":2017079498,"Current Status of Holder":"Present"},{"Stock Serial No":42,"IMEI Number":863872036428256,"Current Holder":"Anita rani gupta","Employee ID":19941260,"Current Status of Holder":"Present"},{"Stock Serial No":43,"IMEI Number":863872038949291,"Current Holder":"Pooja","Employee ID":20200982,"Current Status of Holder":"Present"},{"Stock Serial No":44,"IMEI Number":358525086746355,"Current Holder":"Sarla kataria","Employee ID":19891349,"Current Status of Holder":"Transferred"},{"Stock Serial No":45,"IMEI Number":358525086745191,"Current Holder":"Suman maurya","Employee ID":20036151,"Current Status of Holder":"Present"},{"Stock Serial No":46,"IMEI Number":358525086721242,"Current Holder":"Monika","Employee ID":2013269010,"Current Status of Holder":"Present"},{"Stock Serial No":47,"IMEI Number":358525086703166,"Current Holder":"Shikha tiwari","Employee ID":2013017970,"Current Status of Holder":"Present"},{"Stock Serial No":48,"IMEI Number":358525086718388,"Current Holder":"Sheetal chauhan","Employee ID":2013425753,"Current Status of Holder":"Present"},{"Stock Serial No":49,"IMEI Number":358525086715731,"Current Holder":"Parul","Employee ID":2014008259,"Current Status of Holder":"Present"},{"Stock Serial No":50,"IMEI Number":358525086734169,"Current Holder":"Sunita sharma","Employee ID":2014052401,"Current Status of Holder":"Present"},{"Stock Serial No":51,"IMEI Number":358525086720053,"Current Holder":"Nikita","Employee ID":2014069341,"Current Status of Holder":"Present"},{"Stock Serial No":52,"IMEI Number":358525086710948,"Current Holder":"Tablet not alloted","Employee ID":2013430543,"Current Status of Holder":"Tablet not alloted"},{"Stock Serial No":53,"IMEI Number":358525086608399,"Current Holder":"Anjali rana","Employee ID":20192604,"Current Status of Holder":"Present"},{"Stock Serial No":54,"IMEI Number":864115032548936,"Current Holder":"Yogita sharma","Employee ID":20130594,"Current Status of Holder":"Transferred"},{"Stock Serial No":55,"IMEI Number":358525086716283,"Current Holder":"Neeraj bharti","Employee ID":2014031411,"Current Status of Holder":"Present"},{"Stock Serial No":56,"IMEI Number":358525086758152,"Current Holder":"Meenakshi kataria","Employee ID":20190441,"Current Status of Holder":"Present"},{"Stock Serial No":57,"IMEI Number":358525086722547,"Current Holder":"Nishat anjum","Employee ID":2014081121,"Current Status of Holder":"Present"},{"Stock Serial No":58,"IMEI Number":866664031373661,"Current Holder":"Tablet not alloted","Employee ID":2017103352,"Current Status of Holder":"Tablet not alloted"},{"Stock Serial No":59,"IMEI Number":358525086727488,"Current Holder":"Pratibha vats","Employee ID":2017022687,"Current Status of Holder":"Present"},{"Stock Serial No":60,"IMEI Number":358525086767559,"Current Holder":"Tablet not alloted","Employee ID":19891285,"Current Status of Holder":"Tablet not alloted"},{"Stock Serial No":61,"IMEI Number":911623850023778,"Current Holder":"Vijay kumari","Employee ID":19891403,"Current Status of Holder":"Present"},{"Stock Serial No":62,"IMEI Number":911623850019255,"Current Holder":"Aanchal ruhela","Employee ID":2013216357,"Current Status of Holder":"Present"},{"Stock Serial No":63,"IMEI Number":866330032905360,"Current Holder":"Mamta sharma","Employee ID":20071290,"Current Status of Holder":"Transferred"},{"Stock Serial No":64,"IMEI Number":866664031354075,"Current Holder":"Niharika","Employee ID":2017017872,"Current Status of Holder":"Present"},{"Stock Serial No":65,"IMEI Number":866664031348861,"Current Holder":"Taruna chhabra","Employee ID":20101342,"Current Status of Holder":"Present"},{"Stock Serial No":66,"IMEI Number":358525086742271,"Current Holder":"Suman","Employee ID":2013526849,"Current Status of Holder":"Present"},{"Stock Serial No":67,"IMEI Number":358525086761388,"Current Holder":"Sarika pawar","Employee ID":2013283095,"Current Status of Holder":"Present"},{"Stock Serial No":68,"IMEI Number":863872039098478,"Current Holder":"Ranjana kumari","Employee ID":2017018992,"Current Status of Holder":"Entry Deleted"},{"Stock Serial No":69,"IMEI Number":358525086757865,"Current Holder":"Sheetal","Employee ID":20195160,"Current Status of Holder":"Present"},{"Stock Serial No":70,"IMEI Number":358525086750951,"Current Holder":"Kavita jain","Employee ID":2013589318,"Current Status of Holder":"Present"},{"Stock Serial No":71,"IMEI Number":358525086716416,"Current Holder":"Suchita kaushik","Employee ID":201125695,"Current Status of Holder":"Present"},{"Stock Serial No":72,"IMEI Number":358525086745621,"Current Holder":"Kanta yadav","Employee ID":20102583,"Current Status of Holder":"Present"},{"Stock Serial No":73,"IMEI Number":358525086743568,"Current Holder":"Archana devi","Employee ID":20051183,"Current Status of Holder":"Present"},{"Stock Serial No":74,"IMEI Number":358525086743295,"Current Holder":"Anita seth","Employee ID":19931223,"Current Status of Holder":"Present"},{"Stock Serial No":75,"IMEI Number":911623850001410,"Current Holder":"Alka jain","Employee ID":2014092726,"Current Status of Holder":"Present"},{"Stock Serial No":76,"IMEI Number":358525086734179,"Current Holder":"Anjali sherwal","Employee ID":20181980,"Current Status of Holder":"Transferred"},{"Stock Serial No":77,"IMEI Number":358525086746637,"Current Holder":"Anju rani","Employee ID":20130183,"Current Status of Holder":"Transferred"},{"Stock Serial No":78,"IMEI Number":358525086740887,"Current Holder":"Rekha rani","Employee ID":19961191,"Current Status of Holder":"Present"},{"Stock Serial No":79,"IMEI Number":358525086744582,"Current Holder":"Krishna","Employee ID":20050083,"Current Status of Holder":"Present"},{"Stock Serial No":80,"IMEI Number":358525086738261,"Current Holder":"Tablet not alloted","Employee ID":19870641,"Current Status of Holder":"Tablet not alloted"},{"Stock Serial No":81,"IMEI Number":358525086793118,"Current Holder":"Geeta","Employee ID":20000738,"Current Status of Holder":"Present"},{"Stock Serial No":82,"IMEI Number":358525086791252,"Current Holder":"Rachna","Employee ID":20081550,"Current Status of Holder":"Transferred"},{"Stock Serial No":83,"IMEI Number":358525086683814,"Current Holder":"Kumari jyoti mishra","Employee ID":20172074,"Current Status of Holder":"Present"},{"Stock Serial No":84,"IMEI Number":358525086711359,"Current Holder":"Tablet not alloted","Employee ID":2013030685,"Current Status of Holder":"Tablet not alloted"},{"Stock Serial No":85,"IMEI Number":864115032586092,"Current Holder":"Barkha","Employee ID":2017068950,"Current Status of Holder":"Present"},{"Stock Serial No":86,"IMEI Number":358525086681255,"Current Holder":"Neesha lata","Employee ID":20160356,"Current Status of Holder":"Transferred"},{"Stock Serial No":87,"IMEI Number":358525086752551,"Current Holder":"Sulekha puri","Employee ID":2013269980,"Current Status of Holder":"Present"},{"Stock Serial No":88,"IMEI Number":358525086754938,"Current Holder":"Achala sharma","Employee ID":2014138776,"Current Status of Holder":"Present"},{"Stock Serial No":89,"IMEI Number":358525086733825,"Current Holder":"Kirti kumari","Employee ID":20191028,"Current Status of Holder":"Present"},{"Stock Serial No":90,"IMEI Number":358525086720996,"Current Holder":"Alka sharma","Employee ID":21011180520,"Current Status of Holder":"Present"},{"Stock Serial No":91,"IMEI Number":358525086719451,"Current Holder":"Vandana","Employee ID":20190480,"Current Status of Holder":"Present"},{"Stock Serial No":92,"IMEI Number":359418070121570,"Current Holder":"Meenakshi Jain","Employee ID":2014270760,"Current Status of Holder":"Present"},{"Stock Serial No":93,"IMEI Number":358525089706938,"Current Holder":"Aanchal ruhela","Employee ID":2013216357,"Current Status of Holder":"Entry Deleted"},{"Stock Serial No":94,"IMEI Number":358525086720020,"Current Holder":"Rekha maurya","Employee ID":19970586,"Current Status of Holder":"Present"},{"Stock Serial No":95,"IMEI Number":358525086790536,"Current Holder":"Sheetal solanki","Employee ID":20081696,"Current Status of Holder":"transferred"},{"Stock Serial No":96,"IMEI Number":358525086767328,"Current Holder":"Chaman rani","Employee ID":19940014,"Current Status of Holder":"Present"},{"Stock Serial No":97,"IMEI Number":358525086751728,"Current Holder":"Kanta devi","Employee ID":19941200,"Current Status of Holder":"Present"},{"Stock Serial No":98,"IMEI Number":358525086539438,"Current Holder":"Dolly","Employee ID":20020742,"Current Status of Holder":"transferred"},{"Stock Serial No":99,"IMEI Number":358525086798972,"Current Holder":"Kanchan yadav","Employee ID":2017121487,"Current Status of Holder":"Present"},{"Stock Serial No":100,"IMEI Number":358525086743956,"Current Holder":"Anita","Employee ID":20131909,"Current Status of Holder":"Transferred"},{"Stock Serial No":101,"IMEI Number":358525086746504,"Current Holder":"Meenakshi","Employee ID":2017099447,"Current Status of Holder":"Present"},{"Stock Serial No":102,"IMEI Number":358525086753310,"Current Holder":"Kamla devi","Employee ID":20190490,"Current Status of Holder":"Present"},{"Stock Serial No":103,"IMEI Number":358525086757808,"Current Holder":"Savita kumari","Employee ID":21011077117,"Current Status of Holder":"Entry Deleted"},{"Stock Serial No":104,"IMEI Number":358525086750928,"Current Holder":"Sonali Chaudhary","Employee ID":2020033401,"Current Status of Holder":"Present"},{"Stock Serial No":105,"IMEI Number":358525086746751,"Current Holder":"Anchal Rani","Employee ID":2017019789,"Current Status of Holder":"Entry Deleted"},{"Stock Serial No":106,"IMEI Number":358525086747080,"Current Holder":"Km Alka","Employee ID":2013285968,"Current Status of Holder":"Present"},{"Stock Serial No":107,"IMEI Number":358525086694316,"Current Holder":"Mamta nagar","Employee ID":20190051,"Current Status of Holder":"Present"},{"Stock Serial No":108,"IMEI Number":358525086702184,"Current Holder":"Tablet not alloted","Employee ID":2017010982,"Current Status of Holder":"Tablet not alloted"},{"Stock Serial No":109,"IMEI Number":358525086694241,"Current Holder":"Sunita Garg","Employee ID":20200400,"Current Status of Holder":"Present"},{"Stock Serial No":110,"IMEI Number":358525086741505,"Current Holder":"Mithlesh","Employee ID":20060436,"Current Status of Holder":"Present"},{"Stock Serial No":111,"IMEI Number":866991035472151,"Current Holder":"Madhuri kumari","Employee ID":2013428046,"Current Status of Holder":"Entry Deleted"},{"Stock Serial No":112,"IMEI Number":358525086752668,"Current Holder":"Tara kardam","Employee ID":19930349,"Current Status of Holder":"Transferred"},{"Stock Serial No":113,"IMEI Number":358525086757980,"Current Holder":"Archana anand","Employee ID":20161317,"Current Status of Holder":"Present"},{"Stock Serial No":114,"IMEI Number":358525086782640,"Current Holder":"Jyoti baliyan","Employee ID":20172297,"Current Status of Holder":"Present"},{"Stock Serial No":115,"IMEI Number":358525086789421,"Current Holder":"Neera rana","Employee ID":20112071,"Current Status of Holder":"Present"},{"Stock Serial No":116,"IMEI Number":911623850013514,"Current Holder":"Lakshmi","Employee ID":20025417,"Current Status of Holder":"Present"},{"Stock Serial No":117,"IMEI Number":863872039100712,"Current Holder":"Charu lata","Employee ID":2017018494,"Current Status of Holder":"Present"},{"Stock Serial No":118,"IMEI Number":358525086744962,"Current Holder":"Anushruti Soni","Employee ID":20192906,"Current Status of Holder":"Present"},{"Stock Serial No":119,"IMEI Number":864115032828973,"Current Holder":"Pratibha arora","Employee ID":19940451,"Current Status of Holder":"Present"},{"Stock Serial No":120,"IMEI Number":356867080362934,"Current Holder":"Nirmala kumari","Employee ID":2014002278,"Current Status of Holder":"Present"},{"Stock Serial No":121,"IMEI Number":864115032558554,"Current Holder":"Leena singh","Employee ID":20000532,"Current Status of Holder":"Present"},{"Stock Serial No":122,"IMEI Number":864115033077976,"Current Holder":"Tablet not alloted","Employee ID":20071316,"Current Status of Holder":"Tablet not alloted"},{"Stock Serial No":123,"IMEI Number":358525086821265,"Current Holder":"Raj kumar","Employee ID":21011011980,"Current Status of Holder":"Entry Deleted"},{"Stock Serial No":124,"IMEI Number":866664031378983,"Current Holder":"Asma khatoon","Employee ID":19961072,"Current Status of Holder":"Present"},{"Stock Serial No":125,"IMEI Number":358525086738881,"Current Holder":"Roshni devi","Employee ID":19960344,"Current Status of Holder":"Present"},{"Stock Serial No":126,"IMEI Number":358525086052705,"Current Holder":"Naresh suman","Employee ID":19890874,"Current Status of Holder":"Present"},{"Stock Serial No":127,"IMEI Number":358525086829557,"Current Holder":"Nisha","Employee ID":20160156,"Current Status of Holder":"Present"},{"Stock Serial No":128,"IMEI Number":358525086744541,"Current Holder":"Sharda devi","Employee ID":19970273,"Current Status of Holder":"Transferred"},{"Stock Serial No":129,"IMEI Number":358525086091505,"Current Holder":"Anita","Employee ID":20200880,"Current Status of Holder":"transferred"},{"Stock Serial No":130,"IMEI Number":358525086695768,"Current Holder":"Pratibha","Employee ID":20191293,"Current Status of Holder":"Present"},{"Stock Serial No":131,"IMEI Number":359418010104600,"Current Holder":"Pinky","Employee ID":2017025826,"Current Status of Holder":"Entry deleted"},{"Stock Serial No":132,"IMEI Number":358525086048265,"Current Holder":"Santosh sharma","Employee ID":2014078952,"Current Status of Holder":"Present"},{"Stock Serial No":133,"IMEI Number":866664031158575,"Current Holder":"Rashmi","Employee ID":20160556,"Current Status of Holder":"Present"},{"Stock Serial No":134,"IMEI Number":358525086868365,"Current Holder":"Pushpa devi","Employee ID":20182918,"Current Status of Holder":"Present"},{"Stock Serial No":135,"IMEI Number":358525086906850,"Current Holder":"Devendra singh","Employee ID":19950030,"Current Status of Holder":"Transferred"},{"Stock Serial No":136,"IMEI Number":866911040750516,"Current Holder":"Arti","Employee ID":20171595,"Current Status of Holder":"Transferred"},{"Stock Serial No":137,"IMEI Number":358525086895665,"Current Holder":"Maya Meena","Employee ID":2017078883,"Current Status of Holder":"Present"},{"Stock Serial No":138,"IMEI Number":358525086751314,"Current Holder":"Sapna sharma","Employee ID":2013235213,"Current Status of Holder":"Present"},{"Stock Serial No":139,"IMEI Number":358525086907254,"Current Holder":"Tablet not alloted","Employee ID":21011233540,"Current Status of Holder":"Tablet not alloted"},{"Stock Serial No":140,"IMEI Number":911623850016400,"Current Holder":"Sonu kumar","Employee ID":2013068640,"Current Status of Holder":"Present"},{"Stock Serial No":141,"IMEI Number":358525086883869,"Current Holder":"Monika Sharma","Employee ID":2017017080,"Current Status of Holder":"Present"},{"Stock Serial No":142,"IMEI Number":358525086886474,"Current Holder":"Tablet not alloted","Employee ID":2017032608,"Current Status of Holder":"Tablet not alloted"}]
 


//insertModule(data);
 //readModule({'Current Holder':'Piyush jaiwal'});
//updateModule({'Stock Serial No': 1112},{$set: {'Stock Serial No': 11112}});
//const query="{Current Holder:'Piyush jaiwal'},{$set: {Current Holder:'Piyush Jaiwal'} }";
//console.log(query);
let filter={'Current Holder':'Piyush jaiwal'};
let updates={$set: {'Current Holder':'Piyush jaiwal'}};
//updateModule(filter,updates);
 // deleteModule(); 

 //{'Current Holder':'Piyush jaiwal'},{$set: {'Current Holder':'Piyush jaiwal'}}