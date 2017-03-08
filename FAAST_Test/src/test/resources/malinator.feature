Feature: Execution fo the Mailinator Process

  Scenario Outline: Maliniator Process

    Given I am on the mailinator page
    When  I use  the email address "<email>" in the create email field
    And   I click on generate email
    Then  I can see the email inbox is created with the name "<email>"
    Examples:
      | email   |
      |AR_138189|
      |AR_126463|
      |AR_119811|
      |AR_136475|
      |AR_136477|
      |AR_136480|
      |AR_136482|
      |AR_138045|
      |AR_136493|
      |AR_136501|
      |AR_136502|
      |AR_138046|
      |AR_134846|
      |AR_134858|
      |AR_134876|
      |AR_134879|
      |AR_134880|
      |AR_134885|
      |AR_134932|
      |AR_134995|
      |AR_135026|
      |AR_135029|
      |AR_135030|
      |AR_135032|
      |AR_135050|
      |AR_135057|
      |AR_135064|
      |AR_135068|
      |AR_135070|
      |AR_135140|
      |AR_135144|
      |AR_135147|
      |AR_135150|
      |AR_135171|
      |AR_135175|
      |AR_135208|
      |AR_135218|
      |AR_135219|
      |AR_135224|
      |AR_135236|
      |AR_135242|
      |AR_135257|
      |AR_138179|
      |AR_135260|
      |AR_135319|
      |AR_135323|
      |AR_135325|
      |AR_135371|
      |AR_135395|
      |AR_135398|
      |AR_135399|
      |AR_135412|
      |AR_135419|
      |AR_135429|
      |AR_135437|
      |AR_135581|
      |AR_135586|
      |AR_135590|
      |AR_135593|
      |AR_135594|
      |AR_135598|
      |AR_135600|
      |AR_135601|
      |AR_135602|
      |AR_135606|
      |AR_135610|
      |AR_135611|
      |AR_135612|
      |AR_135613|
      |AR_135616|
      |AR_135617|
      |AR_135618|
      |AR_135623|
      |AR_135633|
      |AR_135636|
      |AR_135645|
      |AR_135651|
      |AR_135653|
      |AR_135654|
      |AR_135656|
      |AR_135714|
      |AR_135718|
      |AR_135719|
      |AR_135720|
      |AR_135722|
      |AR_135741|
      |AR_135749|
      |AR_135751|
      |AR_135753|
      |AR_135862|
      |AR_135863|
      |AR_135866|
      |AR_135868|
      |AR_135872|
      |AR_135881|
      |AR_135907|
      |AR_138180|
      |AR_135917|
      |AR_135922|
      |AR_135925|
      |AR_135935|
      |AR_135946|
      |AR_135949|
      |AR_135952|
      |AR_135955|
      |AR_135962|
      |AR_135965|
      |AR_135967|
      |AR_136004|
      |AR_136008|
      |AR_136009|
      |AR_136019|
      |AR_136020|
      |AR_136028|
      |AR_136029|
      |AR_136030|
      |AR_136033|
      |AR_136040|
      |AR_136045|
      |AR_136055|
      |AR_136066|
      |AR_136067|
      |AR_136068|
      |AR_136070|
      |AR_136079|
      |AR_136085|
      |AR_136087|
      |AR_136088|
      |AR_136096|
      |AR_136099|
      |AR_134861|
      |AR_134864|
      |AR_134866|
      |AR_134871|
      |AR_134873|
      |AR_134895|
      |AR_134897|
      |AR_134912|
      |AR_134913|
      |AR_134919|
      |AR_134923|
      |AR_134926|
      |AR_134938|
      |AR_134950|
      |AR_134970|
      |AR_134976|
      |AR_134985|
      |AR_134987|
      |AR_134990|
      |AR_134994|
      |AR_134996|
      |AR_135008|
      |AR_135010|
      |AR_135015|
      |AR_135037|
      |AR_135039|
      |AR_135046|
      |AR_135075|
      |AR_135077|
      |AR_135080|
      |AR_135081|
      |AR_135082|
      |AR_135086|
      |AR_135090|
      |AR_135092|
      |AR_135093|
      |AR_135100|
      |AR_135101|
      |AR_135105|
      |AR_135123|
      |AR_135125|
      |AR_135182|
      |AR_135186|
      |AR_135188|
      |AR_135190|
      |AR_135191|
      |AR_135197|
      |AR_135203|
      |AR_135223|
      |AR_135228|
      |AR_135230|
      |AR_135241|
      |AR_135243|
      |AR_135248|
      |AR_135274|
      |AR_135280|
      |AR_135302|
      |AR_135303|
      |AR_135314|
      |AR_135336|
      |AR_135351|
      |AR_135362|
      |AR_135370|
      |AR_135376|
      |AR_135379|
      |AR_135380|
      |AR_135385|
      |AR_135387|
      |AR_135390|
      |AR_135392|
      |AR_135393|
      |AR_135397|
      |AR_135421|
      |AR_135462|
      |AR_135465|
      |AR_135487|
      |AR_135489|
      |AR_135496|
      |AR_135507|
      |AR_135511|
      |AR_135515|
      |AR_135521|
      |AR_135528|
      |AR_135533|
      |AR_135534|
      |AR_135535|
      |AR_135542|
      |AR_135543|
      |AR_135544|
      |AR_135546|
      |AR_135547|
      |AR_135549|
      |AR_135558|
      |AR_135570|
      |AR_135572|
      |AR_135575|
      |AR_135577|
      |AR_135657|
      |AR_135663|
      |AR_135664|
      |AR_135672|
      |AR_135677|
      |AR_135680|
      |AR_135682|
      |AR_135683|
      |AR_135688|
      |AR_135689|
      |AR_135695|
      |AR_134834|
      |AR_134839|
      |AR_134850|
      |AR_134854|
      |AR_134855|
      |AR_134889|
      |AR_134894|
      |AR_134904|
      |AR_134909|
      |AR_134918|
      |AR_134924|
      |AR_134963|
      |AR_136105|
      |AR_136109|
      |AR_136111|
      |AR_136116|
      |AR_136127|
      |AR_136129|
      |AR_136130|
      |AR_136137|
      |AR_136145|
      |AR_136146|
      |AR_136148|
      |AR_136184|
      |AR_136185|
      |AR_136190|
      |AR_136200|
      |AR_136206|
      |AR_136208|
      |AR_136217|
      |AR_136219|
      |AR_136223|
      |AR_136224|
      |AR_136227|
      |AR_136231|
      |AR_136233|
      |AR_136234|
      |AR_136237|
      |AR_136248|
      |AR_136250|
      |AR_136254|
      |AR_136258|
      |AR_136261|
      |AR_136262|
      |AR_136264|
      |AR_136268|
      |AR_136273|
      |AR_136279|
      |AR_136282|
      |AR_136586|
      |AR_136587|
      |AR_136593|
      |AR_136595|
      |AR_136597|
      |AR_136613|
      |AR_136614|
      |AR_136634|
      |AR_136639|
      |AR_136647|
      |AR_136653|
      |AR_136655|
      |AR_136664|
      |AR_136665|
      |AR_136670|
      |AR_136679|
      |AR_136680|
      |AR_136681|
      |AR_136736|
      |AR_136738|
      |AR_136754|
      |AR_136758|
      |AR_136759|
      |AR_136762|
      |AR_136772|
      |AR_136774|
      |AR_136778|
      |AR_136779|
      |AR_136781|
      |AR_136785|
      |AR_136793|
      |AR_136794|
      |AR_136795|
      |AR_136798|
      |AR_136799|
      |AR_136801|
      |AR_136811|
      |AR_136814|
      |AR_136823|
      |AR_136851|
      |AR_136852|
      |AR_136863|
      |AR_136864|
      |AR_136865|
      |AR_136868|
      |AR_136869|
      |AR_136870|
      |AR_136875|
      |AR_136880|
      |AR_136892|
      |AR_136944|
      |AR_136950|
      |AR_136967|
      |AR_136975|
      |AR_136992|
      |AR_136984|
      |AR_136985|
      |AR_136546|
      |AR_136650|
      |AR_136700|
      |AR_136714|
      |AR_136717|
      |AR_136719|
      |AR_136723|
      |AR_136731|
      |AR_136733|
      |AR_136734|
      |AR_136843|
      |AR_136905|
      |AR_136914|
      |AR_136915|
      |AR_136920|
      |AR_137026|
      |AR_137030|
      |AR_137034|
      |AR_137041|
      |AR_137045|
      |AR_137046|
      |AR_137051|
      |AR_137052|
      |AR_137059|
      |AR_137062|
      |AR_137065|
      |AR_137068|
      |AR_137072|
      |AR_137076|
      |AR_137080|
      |AR_137081|
      |AR_137084|
      |AR_137086|
      |AR_137096|
      |AR_137097|
      |AR_137104|
      |AR_137107|
      |AR_137121|
      |AR_137123|
      |AR_137129|
      |AR_137141|
      |AR_137154|
      |AR_137156|
      |AR_137165|
      |AR_137179|
      |AR_137183|
      |AR_137187|
      |AR_137195|
      |AR_137197|
      |AR_137198|
      |AR_137200|
      |AR_137209|
      |AR_137213|
      |AR_137217|
      |AR_137220|
      |AR_137222|
      |AR_137225|
      |AR_137226|
      |AR_137230|
      |AR_137231|
      |AR_137234|
      |AR_137235|
      |AR_137236|
      |AR_137244|
      |AR_137247|
      |AR_137250|
      |AR_137251|
      |AR_137252|
      |AR_137254|
      |AR_137257|
      |AR_137258|
      |AR_137263|
      |AR_137274|
      |AR_137281|
      |AR_137282|
      |AR_137284|
      |AR_137286|
      |AR_137302|
      |AR_137308|
      |AR_137309|
      |AR_137315|
      |AR_137319|
      |AR_137320|
      |AR_137322|
      |AR_137325|
      |AR_137334|
      |AR_137335|
      |AR_137336|
      |AR_137340|
      |AR_137341|
      |AR_137343|
      |AR_137344|
      |AR_137346|
      |AR_137351|
      |AR_137357|
      |AR_137360|
      |AR_137365|
      |AR_137367|
      |AR_137368|
      |AR_137375|
      |AR_137377|
      |AR_137379|
      |AR_137385|
      |AR_137386|
      |AR_137389|
      |AR_137391|
      |AR_137393|
      |AR_137394|
      |AR_137405|
      |AR_137409|
      |AR_137410|
      |AR_137412|
      |AR_137413|
      |AR_137422|
      |AR_137423|
      |AR_137428|
      |AR_137432|
      |AR_137433|
      |AR_137434|
      |AR_137436|
      |AR_137437|
      |AR_137439|
      |AR_137440|
      |AR_137442|
      |AR_137445|
      |AR_137448|
      |AR_137469|
      |AR_137472|
      |AR_137479|
      |AR_137481|
      |AR_137488|
      |AR_137490|
      |AR_137491|
      |AR_137495|
      |AR_137497|
      |AR_137500|
      |AR_137503|
      |AR_137505|
      |AR_137508|
      |AR_137533|
      |AR_137536|
      |AR_137540|
      |AR_137545|
      |AR_137560|
      |AR_137564|
      |AR_137567|
      |AR_137570|
      |AR_137572|
      |AR_137578|
      |AR_137657|
      |AR_137660|
      |AR_137665|
      |AR_137670|
      |AR_137706|
      |AR_137714|
      |AR_137721|
      |AR_137729|
      |AR_137852|
      |AR_137856|
      |AR_137857|
      |AR_137858|
      |AR_137981|
      |AR_137986|
      |AR_137988|
      |AR_137994|
      |AR_137582|
      |AR_137591|
      |AR_137596|
      |AR_137597|
      |AR_137601|
      |AR_137602|
      |AR_137606|
      |AR_137619|
      |AR_137623|
      |AR_137117|
      |AR_137627|
      |AR_137637|
      |AR_137775|
      |AR_137778|
      |AR_137782|
      |AR_137789|
      |AR_137791|
      |AR_137807|
      |AR_137815|
      |AR_137818|
      |AR_137833|
      |AR_137840|
      |AR_137862|
      |AR_137865|
      |AR_137872|
      |AR_137875|
      |AR_137876|
      |AR_137891|
      |AR_137896|
      |AR_137907|
      |AR_137910|
      |AR_137912|
      |AR_137920|
      |AR_137927|
      |AR_137928|
      |AR_137935|
      |AR_137946|
      |AR_138006|
      |AR_138013|
      |AR_138018|
      |AR_138019|
      |AR_138021|
      |AR_138031|
      |AR_137642|
      |AR_137738|
      |AR_137740|
      |AR_137749|
      |AR_138118|
      |AR_137751|
      |AR_137756|
      |AR_137760|
      |AR_137761|
      |AR_137763|
      |AR_137764|
      |AR_137767|
      |AR_135705|
      |AR_135709|
      |AR_135726|
      |AR_135737|
      |AR_135766|
      |AR_135769|
      |AR_135770|
      |AR_135773|
      |AR_135797|
      |AR_135799|
      |AR_135801|
      |AR_135813|
      |AR_135817|
      |AR_135818|
      |AR_135820|
      |AR_135826|
      |AR_135832|
      |AR_135835|
      |AR_135842|
      |AR_135849|
      |AR_135850|
      |AR_135852|
      |AR_135855|
      |AR_135856|
      |AR_135883|
      |AR_135891|
      |AR_135895|
      |AR_135916|
      |AR_135918|
      |AR_135933|
      |AR_135939|
      |AR_135977|
      |AR_138032|
      |AR_135984|
      |AR_135985|
      |AR_135994|
      |AR_135996|
      |AR_135997|
      |AR_136993|
      |AR_135998|
      |AR_135999|
      |AR_136283|
      |AR_136994|
      |AR_136287|
      |AR_136996|
      |AR_136997|
      |AR_137000|
      |AR_136306|
      |AR_136310|
      |AR_136320|
      |AR_137002|
      |AR_136323|
      |AR_137003|
      |AR_136330|
      |AR_136332|
      |AR_136334|
      |AR_137005|
      |AR_136347|
      |AR_136362|
      |AR_137007|
      |AR_136364|
      |AR_136369|
      |AR_136370|
      |AR_136374|
      |AR_136387|
      |AR_136418|
      |AR_136419|
      |AR_136422|
      |AR_136425|
      |AR_136429|
      |AR_136431|
      |AR_136432|
      |AR_136433|
      |AR_136436|
      |AR_136437|
      |AR_136585|
      |AR_136441|
      |AR_136443|
      |AR_136446|
      |AR_136447|
      |AR_136450|
      |AR_136452|
      |AR_136454|
      |AR_136455|
      |AR_136457|
      |AR_136458|
      |AR_136461|
      |AR_136462|
      |AR_136463|
      |AR_136464|
      |AR_136465|
      |AR_136466|
      |AR_136469|
      |AR_136579|
      |AR_136471|
      |AR_136521|
      |AR_136522|
      |AR_136523|
      |AR_136525|
      |AR_136529|
      |AR_136534|
      |AR_136535|
      |AR_136536|
      |AR_136537|
      |AR_136538|
      |AR_136544|
      |AR_136553|
      |AR_136554|
      |AR_136557|
      |AR_136562|
      |AR_136563|
      |AR_136566|
      |AR_136575|
      |AR_136580|
      |AR_136581|
      |AR_136439|
      |AR_138075|
      |AR_138081|
      |AR_138094|
      |AR_138107|
      |AR_136252|