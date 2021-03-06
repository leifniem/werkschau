const fs = require('fs')

let absolventinnen = [

	{
		slug: 'annalenaadrian',
		desc_short: 'Corporate Design einer nachhaltigen Schmuckmarke',
		desc_long:
			'Die Vision von ENSO ist es nachhaltigen Schmuck mit dem Fokus auf Ringe zu kreieren und die Grenzen zwischen den Geschlechtern zu verwischen. Die Marke zelebriert die Schönheit der Imperfektion. Jeder Ring ist ein Unikat und besteht zu 100% aus Flaschen aus recyceltem Altglas. Bei ENSO ist Vielfalt eine Selbstverständlichkeit und Nachhaltigkeit steht im Mittelpunkt.',
		name: 'Anna Lena Adrian',
		title: 'ENSO',
		betreuung:
			`<h3>Referentin</h3> Prof. Betty Schimmelpfennig
			<h3>Co-Referent</h3> Dipl.-Des. Kai Staudacher`
	},
	{
		slug: 'annasophieschneider',
		desc_short: 'Illustrierte Zeitreise für junge Leser',
		desc_long:
			'„Alles platt in der Platte“ ist eine illustrierte Zeitreise für junge Leser. Das Buch beschäftigt sich mit der DDR und soll Jugendliche dazu animieren sich mit diesem, historisch sehr wichtigen Thema auseinander zu setzen. Informationsgrundlage des selbst verfassten Textes sind Erzählungen, Fotos und Original-Dokumente meiner Familie, welche aus der ehemaligen DDR stammt. Auch wenn das Buch ursprünglich für Jugendliche verfasst ist, werden sicher "Ex-Ossis" an der ein oder anderen Stelle schmunzeln, wenn es beispielsweise um "Herrn Fuchs und Frau Elster" oder die "Schulmilch" geht.',
		name: 'Anna Sophie Schneider',
		title: 'Alles platt in der Platte? – Kindheit und Jugend in der DDR'
	},
	{
		slug: 'denisegoldmann',
		desc_long:
			'Der animierte Kurzfilm setzt sich auf experimentelle Weise mit dem Prozess des Vergessens auseinander. Er behandelt die Geschichte einer Frau, die an  Lewy-Body-Demenz erkrankt ist. Ihr Mann erzählt in dem Film, was die Diagnose  für ihrer beider Leben bedeutet hat, wie er einen Abschied nach dem anderen erlebt  und es plötzlich keine Zukunftspläne mehr gibt. Die handgezeichneten Animationen  sind eine visuelle Interpretation dessen, was er erfährt. Sie erweitern das Erzählte und lassen einen tiefer in seine Geschichte eintauchen.\n Das Projekt wird gefördert von der HessenFilm und Medien GmbH.',
		name: 'Denise Goldmann',
		desc_short: 'Animierter Kurzfilm über das Vergessen',
		title: 'Experimentalfilm über das Erinnern und Vergessen',
		betreuung:
			`<h3>Referent</h3> Prof. Börries Müller-Büsching<br>
			<h3>Co-Referentin</h3> Prof. Dr. Cornelia Freitag-Schubert`
	},
	{
		slug: 'dunjavitasovic',
		name: 'Dunja Vitasovic',
		desc_short: 'Illustriertes Buch',
		title: 'Tierische Beleidigungen,und warum diese nicht wahr sind',
		desc_long:
			'Tierbeleidigungen gehören zu unserem alltäglichen Sprachgebrauch. Doch wenig Menschen wissen woher diese Ausdrücke stammen und ob sie überhaupt korrekt sind. Durch das Benutzen von tierischen Schimpfwörtern verbreiten sich unwahre Vorurteile, welche dazu führen, dass Menschen Tiere als minderwertige Lebewesen ansehen. Mein Buch \"Tierische Beleidigungen, und warum diese nicht wahr sind\" dient zur Aufklärung von falsch benutzten Beleidigungen mit Tiernamen. Verbunden mit lustigen Illustrationen und einer einfachen Tonality soll es dem/der Leser/in Spaß machen das Buch zu lesen.',
		betreuung:
			`<h3>Referentin</h3> Prof. Dr. Cornelia Freitag-Schubert<br>
			<h3>Co-Referent</h3> Prof. Dr. Boris Röhrl`
	},
	{
		slug: 'emreaydin',
		desc_short:
			'Eine illustrierte Ausgabe einer Kurzgeschichte von Haruki Murakami',
		desc_long:
			'Meine Bachelorthesis ist eine illustrierte Ausgabe der Kurzgeschichte "Der Elefant verschwindet" von Haruki Murakami. Ich habe mich für seine Kurzgeschichte entschieden, da seine Geschichten sehr amüsant und erfrischend sind und auch viel Spielraum für coole Illustrationen darbieten. Die Leser sollen in die geheimnisvolle Geschichte des Elefanten eintauchen und durch die Illustrationen noch mehr Spaß am Lesen haben.',
		name: 'Emre Aydin',
		title: 'Der Elefant verschwindet',
		betreuung:
			`<h3>Referent</h3> Prof. Dr. Boris Röhrl<br>
			<h3>Co-Referentin</h3> Prof. Dr. Cornelia Freitag-Schubert`
	},
	{
		slug: 'evafischerlarareitz',
		desc_short: 'Eine interaktive Rauminstallation zum Thema Kommunikation',
		name: 'Eva Fischer & Lara Reitz',
		title: 'mal makina',
		desc_long:
			'Die interaktive Rauminstallation verfremdet den Diskurs zweier Dialogpartner*innen in Echtzeit mittels audiovisueller Störfilter und erschwert damit die Kommunikation. Es stehen sich zwei Personen gegenüber. Zwischen ihnen befindet sich eine Art Blackbox. Sie hören und sehen sich jedoch nur über Kopfhörer bzw. Monitore. Sich selbst sehen sie dabei nicht. Die Gesichter werden mittels AR dezent verändert, dass der Dialog durch kleine, wichtige Details (z.B. fehlender Blickkontakt) gestört wird.',
		betreuung:
			`<h3>Referent</h3> Prof. Dr. Theo Steiner<br>
			<h3>Co-Referent</h3> Dipl.-Des. David Bascom`
	},
	{
		slug: 'fynnfischer',
		desc_short: 'Eine App zur Visualisierung der Klimabilanz von Lebensmitteln',
		desc_long:
			'Immer mehr erfahren wir von Waldbränden, Flutkatastrophen, Klimawandel. Und immer mehr kaufen wir plastikfreie, regionale, nachhaltige Produkte. Aber was ist nur Umweltversprechen, Werbebotschaft, Greenwashing?\n Conscious ist eine App, die deine Einkäufe nachhaltiger macht. Sie unterstützt dich dabei, mehr Rücksicht auf deine Gesundheit und die des Planeten zu nehmen. Das funktioniert, indem du einfach deinen Kassenzettel scannst.  Und damit eine übersichtliche Darstellung deiner Bilanz erhältst — mit individuellen Tipps und Empfehlungen zu einem nachhaltigeren Einkauf.',
		name: 'Fynn Fischer',
		title: 'Conscious',
		betreuung:
			`<h3>Referent</h3> Prof. Jörg Waldschütz<br>
			<h3>Co-Referent</h3> Dipl.-Des. David Bascom`
	},
	{
		slug: 'hannahreitze',
		desc_short:
			'Ein Editorial über das indigene Volk in Indonesien aus authentischen Perspektiven.',
		desc_long:
			'In den letzten Jahrhunderten hat sich Mattaoi rapide verändert, vor allem Kolonialisierung, Missionierung und Unterdrückung haben die indigene Bevölkerung gezwungen ihren Lebensstil anzupassen. Durch den Einzug der Moderne sind die Inseln auch heute im ständigen Wandel. Während manche Mattaoi mit Pfeil und Bogen auf die Jagd gehen, arbeiten andere mit ihren Laptops im Büro. Die Lebensstile unterscheiden sich genauso wie die Träume, Interessen, Meinungen und Bedürfnisse. "Aku Mattaoi - I\'m Mattaoi" gibt einen Einblick in die vielfältige Gesellschaft des Archipels.',
		name: 'Hannah Reitze',
		title: 'Die Welt der Mattaoi in ihren eigenen Worten.',
		betreuung:
			`<h3>Referent</h3> Prof. Dr. Theo Steiner<br>
			<h3>Co-Referent</h3> Prof. Dr. Boris Röhrl`
	},
	{
		slug: 'ildikomueller',
		desc_short: 'Dokumentarische Visualisierung der Mode der 90er Jahre',
		desc_long:
			'Mode ist ein sich immer wiederholender Kreislauf und so ist es auch nichts Ungewöhnliches, dass wir mitten im REVIVAL der Mode der 90er Jahre stecken. Aber welche Trends genau haben es aus den 90ern es ins Jahr 2021 zurückgeschafft? Und welche bleiben lieber in der Vergangenheit? Das REVIVAL Magazin gibt einen Überblick über die verschiedenen Modestile der 90er, Trends, sowie auch Popkultur. Das Magazin bietet einen nostalgischen Rückblick, sowie durch eigene Fotografien einen direkten Vergleich zu der Mode heute und in welcher Form die Mode der 90er modernisiert wurde.',
		name: 'Ildikó Müller',
		title: 'Dokumentarische Visualisierung der Mode der 90er Jahre',
		betreuung:
			`<h3>Referentin</h3> Prof. Betty Schimmelpfennig<br>
			<h3>Co-Referent</h3> Dipl.-Des. Kai Staudacher`
	},
	{
		slug: 'jenniferleidolf',
		desc_short: 'Konzeption und Gestaltung für ambulante Pflegeeinrichtungen',
		desc_long:
			'Allein in Wiesbaden gibt es an die 30 - 40 ambulanten Pflegedienste. Gerade in den letzten Monaten ist die Relevanz dieser Betriebe wohl jedem klar geworden. Pflegekräfte haben einen anstrengenden und stressigen Arbeitsalltag, wofür sie in vielen Fällen nicht ausreichend gewürdigt werden. Sowohl in gesellschaftlicher Hinsicht, als auch in finanzieller. Die meisten Pflegedienste bedienen sich intern einer Software, mit welcher sie alle Prozesse, Touren, Dienstpläne, Verordnungen, Medikamentengaben, Pflegeberichte, etc. koordinieren und mit den Außendienstkräften kommunizieren. Diese Art der Kommunikation zwischen dem Büro und den Außendienstkräften ist von zentraler Bedeutung für jeden Pflegedienst. Leider sind aktuelle Systeme zum einen nicht auf digitales Arbeiten ausgelegt, zum anderen sind sie nicht intuitiv genug, als dass man sie ohne wochenlange und teure Schulungen einwandfrei bedienen könnte. Die Arbeit der Außen- und Innendienstmitarbeiter:innen von ambulanten Pflegediensten soll durch eine intuitivere und digitalere Plattform vereinfacht werden. Die Kommunikation unter den Mitarbeiter:innen, sowie die Kommunikation zu Krankenhäusern, Ärzten, Krankenkassen, etc. soll erleichtert werden. Die Entfernungen und Reichweiten von ambulanten Pflegediensten sind oft groß, die Wege vom Kunden\nüber den Pflegedienst bis hin zur Kasse sind lang, was durch ein digitaleres Arbeiten beschleunigt und vereinfacht werden könnte. Mein Hauptanliegen war, das Programm so intuitiv wie möglich zu gestalten, sodass jede der Pflegekräfte das Programm via App benutzen kann. Und es hierfür keiner Schulung bedarf, die sich in wirtschaftlicher Hinsicht z. B. bei Mini-Jobber:innen auch gar nicht lohnen würde. Beispielsweise ein integriertes ausgereiftes Fuhrpark- oder Verordnungsmanagment ist am Markt leider schwer zu finden. Bisher gibt es kein Programm, welches alle Bedürfnisse erfüllt. Meine Idee war es, eine Plattform zu schaffen, die möglichst alle Prozesse in allen Bereichen der ambulanten Pflege vereint und vereinheitlicht. So soll eine Verbesserung und Vereinfachung der Kommunikation innerhalb eines Pflegedienstes erwirkt werden, sowie ein Netzwerk unter verschiedenen Leistungserbringern\n(Ärzte, Apotheken, Krankenhäuser und Sozialdiensten) herstellen. Insgesamt umfasst mein Projekt zwei Apps und eine Software. Eine App für den Außendienst (Pflegekräfte) und eine App für die Kund:innen. Hinzu kommt die PC-Software für den Innendienst. In der App für die Pflegekräfte liegt mein Hauptaugenmerk auf einer schnellen und einfachen Bedienung, da die ohnehin knappe Zeit nicht mit langem Tippen zwecks Dokumentation oder Kommunikation verschwendet werden soll. Dies ist in drei verschiedenen Sprachen möglich, um etwaige Barrieren zu beseitigen. Wohingegen ich bei der Kund:innen-App vor allem Wert darauf gelegt habe, komplexe Daten in eine einfache Form zu bringen, sodass auch ältere Menschen im Stande sind, die App zu nutzen und in engem Kontakt mit ihrem Pflegedienst stehen zu können. In der Software geht es vor allem um Vereinheitlichung und Verschlankung von langwierigen und komplexen Prozessen und Vorgängen. Dies geschieht durch eine permanente Live-Synchronisierung (inkl. mit den Apps), digitalisierte Prozesse und eine zielgruppenorientierte und anwenderfreundliche Gestaltung.',
		name: 'Jennifer Leidolf',
		title: 'Konzeption und Gestaltung für ambulante Pflegeeinrichtungen',
		betreuung:
			`<h3>Referentin</h3> Prof. Betty Schimmelpfennig<br>
			<h3>Co-Referent</h3> Dipl.-Des. Klaus Eckert`
	},
	{
		slug: 'johannesbruns',
		desc_short: 'Augmented Reality Konzeptstudie',
		desc_long:
			'Das New Life Balance System ist eine Zeitwaage, die der Messung von Work-Life-Balance dient. Dieses Augmented Reality Tool, ist eine Konzeptstudie für eine spezielle Zukunftsvision. In dieser Zukunft definieren Menschen ihren Wohlstand und ihren sozialen Status nicht mehr durch materielle Güter, sondern durch die Zeit, um ein schönes Leben zu führen. Das spekulative Design soll anregen, über den Zusammenhang von erlebter Zeit, Wohlstand, Statussymbolen und Social Credit Systemen nachzudenken.',
		name: 'Johannes Bruns',
		title: 'Das New Life Balance System',
		betreuung:
			`<h3>Referentin</h3> Prof. Betty Schimmelpfennig<br>
			<h3>Co-Referentin</h3> Prof. Dr. Cornelia Freitag-Schubert`
	},
	{
		slug: 'josephineweier',
		desc_short: 'Digitales Magazin für Musikerinnen*',
		desc_long:
			'Outro ist ein digitales Musikmagazin für Musikerinnen* aus dem deutschsprachigen Raum, welches die Musikwelt aus einer feministischen Perspektive beleuchtet. Im Fokus soll dabei stehen, Newcomerinnen* und anderen talentierten Musikfrauen* eine Plattform zu bieten und auf Missstände in der Musikindustrie hinzuweisen.',
		name: 'Josephine Weier',
		title: 'Outro',
		betreuung:
			`<h3>Referent</h3> Prof. Jörg Waldschütz<br>
			<h3>Co-Referent</h3> Dipl.-Des. Sven Heller`
	},
	{
		slug: 'katharinaeibeck',
		desc_short: 'Corporate Design für geschlechtsneutrale Streetwear',
		desc_long:
			'Die Frage ob männlich oder weiblich im Bezug auf Kleidung ist in den letzten Jahren immer mehr in den Hintergrund gerückt. Jedoch wird das Thema immer noch nicht von allen Menschen akzeptiert. UNZiP ist eine geschlechtsneutrale Streetwear Marke, die die Intention hat, Menschen davon zu überzeugen, stereotypes Denken abzulegen und sich von alten Konventionen zu lösen. Durch ein einzigartiges Reißverschluss-Prinzip, können die umweltfreundlichen Kleidungstücke von jedem Menschen nach seinen eigenen Vorlieben getragen und das Konsumverhalten eingedämmt werden.',
		name: 'Katharina Eibeck',
		title: 'UNZiP',
		betreuung:
			`<h3>Referentin</h3> Prof. Betty Schimmelpfennig<br>
			<h3>Co-Referent</h3> Dipl.-Des. Kai Staudacher`
	},
	{
		slug: 'laurapeter',
		desc_short: 'Eine Aufklärungskampagne über Rassismus in der Dermatologie',
		desc_long:
			'Wusstest du, dass die medizinische Fachliteratur und Lehre Hauterkrankungen zu etwa 90% auf weißer Haut betrachtet? Und das, obwohl sich die Erscheinungsbilder von Symptomen und Hauterkrankungen auf den verschiedenen Hauttypen deutlich unterscheiden. Die Folgen sind Unter- und Fehldiagnosen bei Patient:innen mit dunkler Haut.\n Um Medizinstudierende und angehende Dermatolog:innen schon während ihrer Ausbildung für dieses Leck in der Lehre zu sensibilisieren, habe ich eine Aufklärungskampagne gestaltet.',
		name: 'Laura Peter',
		title: 'Rassismus geht unter die Haut ',
		betreuung: `<h3>Referent</h3> Prof. Taner Ercan
		<h3>Co-Referent</h3> Prof. Rüdiger Pichler`
	},
	{
		slug: 'laurareitze',
		desc_short:
			'Visualisierung der Beziehung zwischen Emotionen und der kardiovaskulären Reaktivität',
		name: 'Laura Reitze',
		title: 'Science to touch',
		desc_long:
			'Zu emotional, zu sensibel – den meisten Menschen fällt es schwer, über Emotionen zu reden. Dabei haben gerade Emotionen einen enormen Einfluss auf unsere Gesundheit und das Herz. Das Buch „Momentum: Herz&Emotion“ schafft durch die Verzahnung von Wissenschaft und Design einen forschend-experimentellen Zugang zur Wahrnehmung von Emotionen deren Einfluss auf die Herzgesundheit. Mit interaktiven Elementen und der multisensorischen Erfahrbarkeit von Sinneswahrnehmungen ist es möglich in neue Dimensionen der Wissensvermittlung einzutauchen.',
		betreuung:
			`<h3>Referentin</h3> Prof. Betty Schimmelpfennig<br>
			<h3>Co-Referent</h3> Prof. Dr. Theo Steiner`
	},
	{
		slug: 'leanaumann',
		desc_short:
			'Konzept und Gestaltung eines fiktiven Events für den DHB (Deutscher Hockey-Bund)',
		desc_long:
			'Ich spiele Hockey. Nein, kein Eishockey mit Schlittschuhen und Puck. Die Unbekanntheit des klassischen Feldhockeys verwundert mich schon lange, da es die erfolgreichste Ballsportart Deutschlands ist und wir traditionell zu den erfolgreichsten Hockey-Nationen der Welt zählen. Um der Sportart zu mehr Aufmerksamkeit zu verhelfen habe ich das erste Hockeyevent konzipiert, welches sich nicht exklusiv an die Hockeygemeinschaft richtet, sondern die Öffentlichkeit als Zielgruppe anspricht.',
		name: 'Lea Naumann',
		title: 'Konzept und Gestaltung eines fiktiven Events für den DHB',
		betreuung:
			`<h3>Referentin</h3> Prof. Betty Schimmelpfennig<br>
			<h3>Co-Referent</h3> Dipl.-Des. Kai Staudacher`
	},
	{
		slug: 'lenafuenfsinn',
		desc_short: 'Editorial Design zum Thema Wahrnehmung',
		desc_long:
			'Im Buch stolpern wir über unsere Verzerrungen. Wir merken, dass wir gar nicht so logisch und rational denken, wie wir immer dachten, sondern dass wir voreingenommen sind, in Schubladen und Stereotypen denken. Durch Abkürzungen beim Verarbeiten von Millionen Informationen, die durch unser Gehirn schwirren, entstehen Fehler, sog. kognitive Verzerrungen. Wir alle haben sie und werden sie nie los. Sie passieren unbewusst. Aber wenn wir sie kennen, können wir sie uns bewusst machen. Und wenn sie in einem Buch beschrieben und visualisiert werden, steigt die Chance, dass wir uns an sie erinnern.',
		name: 'Lena Fünfsinn',
		title: 'Verzerrt.',
		betreuung:
			`<h3>Referentin</h3> Prof. Dr. Cornelia Freitag-Schubert<br>
			<h3>Co-Referent</h3> Prof. Dr. Theo Steiner`
	},
	{
		slug: 'lillywehlmann',
		desc_short: 'Eine Reaktion auf den Klimawandel im urbanen Raum',
		desc_long:
			'Meine Bachelor-Thesis handelt von den Problemen mit denen Metropolen sich belasten und von einem simplen, basisdemokratischen Lösungsweg für eine blühende Zukunft. "Verticity" ist eine Plattform, auf welcher pflanzwillige Stadtbewohner*innen und Hausbesitzer*innen mit ungenutzter Fassadenfläche zusammenfinden und gemeinsam mit uns für grünere Städte, sauberere Luft und rundum mehr Wohlbefinden sorgen. Eine Website, sowie gekoppelte Werbemaßnahmen informieren und bewegen User*innen dazu mitzuwirken.',
		name: 'Lilly Wehlmann',
		title: 'GRÜNER',
		betreuung:
			`<h3>Referent</h3> Prof. Dr. Theo Steiner<br>
			<h3>Co-Referent</h3> Prof. Taner Ercan`
	},
	{
		slug: 'luisamariazangardi',
		name: 'Luisa Maria Zangardi',
		title: 'Herbsttrompeten',
		desc_short: 'Typographisches Editorial Design',
		desc_long:
			'Herbsttrompeten ist eine Geschichte über Einsamkeit im Alter. Rosemarie lebt alleine. Durch ihre kauzige Art fällt es ihr schwer, Kontakte zu knüpfen. Eines Tages beschließt sie, ihre Einsamkeit auf ungewöhnliche Art zu beenden. Mit Hilfe einer Dating-App will sie ein Enkelkind finden. Fotos und Typo sollen die Lesenden in die Geschichte ziehen. Darstellen, dass sie nicht arg anders als die Protagonistin sind und zeigen: du könntest Rosemarie sein! Auch dich könnte Einsamkeit treffen. Oder bist du sogar schon einsam?',
		betreuung:
			`<h3>Referent</h3> Prof. Dr. Theo Steiner<br>
			<h3>Co-Referentin</h3> M.A. Laura Padgett`
	},
	{
		slug: 'luisekummer',
		desc_short: 'Crossmediale Installation',
		desc_long:
			'Durch die globale Krise, die strengen Kontaktbeschränkungen und soziale Isolation, leiden die meisten Menschen unter einer großen psychischen Belastung. Dies hinterlässt Spuren im gesellschaftlichen Miteinander. Gerade in diesen trüben Zeiten ist es wichtig für klare Sicht zu sorgen: Was sind meine Werte? Wie begegne ich Freund*innen, Familie oder Fremden? Wo liegen meine Stärken und wo meine Schwächen? Was kann ich Gutes aus der Krisenzeit mitnehmen?\n"Mit gesundem Abstand" ist eine crossmediale Installation, die zur Selbstreflexion einlädt. Mithilfe von ausgewählten Fragen sollen Menschen dazu ermutigt werden, sich mit sich selbst auseinander zusetzen. Die daraus neu gewonnenen Erkenntnisse können die Resilienz stärken und aufbauen. Das Ziel des Projektes ist, einen Teil dazu beizutragen, die psychische Gesundheit der Menschen in der Krise zu unterstützen, indem mit gesundem Abstand auf eine außergewöhnliche Zeit geblickt wird.',
		name: 'Luise Kummer',
		title: 'Mit gesundem Abstand',
		noportrait: true,
		betreuung:
			`<h3>Referentin</h3> Prof. Betty Schimmelpfennig<br>
			<h3>Co-Referent</h3> Prof. Dr. Theo Steiner`
	},
	{
		slug: 'matswitte',
		desc_long:
			'Das Archiv der Artefakte des Androzän präsentiert erstmals archäologische Funde aus der fernen Zeit des Androzän. Im Androzän war die genetische Ausprägung biologischer Geschlechtsmerkmale ein wichtiger Identifikationsfaktor, auf dessen Grundlage zwischen Herrschenden und Beherrschten unterschieden wurde. Ein komplexes System aus sozialen und technischen Mechanismen diente der Unterdrückung der Frauen durch die Männer. Dazu stellen wir anhand von Fundstücken einige Praxisbeispiele vor.',
		name: 'Mats Witte',
		title: 'Archiv der Artefakte des Androzän',
		desc_short: 'Mixed Media Installation',
		betreuung:
			`<h3>Referentin</h3> Prof. Betty Schimmelpfennig<br>
			<h3>Co-Referent</h3> Dipl.-Des. David Bascom`
	},
	{
		slug: 'michelleborsarileoniesybertz',
		desc_short: 'Nachhaltige Alternative für eine buntere und bessere Welt',
		desc_long:
			'Kleidung trägt in unserer Gesellschaft einen maßgeblichen Teil zur individuellen Selbstdarstellung bei und ist auch für uns, die Geschwister Heiter, ein gern genutztes kreatives Mittel zum Selbstausdruck. Deshalb haben wir eine Corporate Identity für unsere bisher fiktive Vintage-, Second-hand- & Upcycling-Modemarke Heiter Weiter entwickelt und gestaltet. Langfristig profitieren wir alle davon, wenn wir den übertrieben Wegwerfkonsum, den die schnelllebige Modeindustrie vorgibt, in seine Schranken weisen und stattdessen unsere Schränke mit einzigartigen Schätzen aufwerten.\n Look good - Do good.',
		name: 'Michelle Borsari & Leonie Sybertz',
		title: 'Secondhand-Mode',
		betreuung:
			`<h3>Referent</h3> Prof. Rüdiger Pichler<br>
			<h3>Co-Referent</h3> Dipl.-Des. Klaus Eckert`
	},
	{
		slug: 'nicolechristineseegert',
		name: 'Nicole Christine Seegert',
		title: 'MEAT',
		desc_short: 'Animierter 2D-3D-Kurzfilm',
		desc_long:
			'Die Wälder bieten Lebensräume für 80% aller landbewohnenden Tiere und Pflanzen. 2017 verschwanden jedoch weltweit etwa 40 Fußballfelder Regenwald – pro Minute. Wofür? Für die Fleischindustrie. Diese benötigt die Fläche u.a. für den Anbau von Futterpflanzen. Mein Animationsfilm erzählt die Geschichte eines kleinen Jaguars, der sein Zuhause, den Regenwald, durch eine solche Rodung verliert. Hierfür werden animierte Illustrationen mit 3D-Elementen und malerischen Texturen kombiniert.',
		betreuung:
			`<h3>Referent</h3> Prof. Börries Müller-Büsching<br>
			<h3>Co-Referent</h3> Dipl.-Des. Hannes Raff`
	},
	{
		slug: 'oliverkuehl',
		name: 'Oliver Kühl',
		title: 'Pen&Paper Einsteiger Guide',
		desc_short: 'Der illustrierte Guide ins Pen & Paper Rollenspiel für Anfänger vor ihrem ersten Abenteuer.',
		desc_long: 'Er beinhaltet grundlegendes Wissen über Pen & Paper Rollenspiele, eine Einführung ins Rollenspiel, Tipps für die Erstellung des eigenen Charakters und das Rollenspiel in einer Gruppe. Außerdem auch eine Übersicht über bekannte Rollenspiele und Kontaktmöglichkeiten zu Pen&Paper Communities. Alles gespickt mit Beispielen zur eigenen Entfaltung mit Hinblick auf das eigene Spielerlebnis.',
		betreuung:
			`<h3>Referent</h3> Prof. Christine Bernhardt<br>
			<h3>Co-Referent</h3> Prof. Boris Röhrl`
	},
	{
		slug: 'patrickbeck',
		desc_short: 'Entwicklung und Gestaltung eines taktischen Kartenspiels',
		desc_long:
			'Kennt ihr das? Euch passieren im Alltag nur Missgeschicke und ihr habt nie so richtig Glück. Dann geht es euch so wie Larry, einem Hauptcharakter dieses Spiels, der immer Pech hat. Sein Bruder Gerry hat immer Glück."Shit Happens" ist ein strategisches Kartenspiel, bei dem ihr "wie im echten Leben" entweder Glück oder Pech habt. Ihr sammelt Punkte und wer am Ende mehr hat, hat gewonnen. Jetzt liegt es an euch; Stellt euren Freunden Fallen, damit sie die Pechvögel werden und seid selbst der Glückspilz. Am Ende jeder Spielrunde entscheidet sich nämlich, wer der Gerry und Larry der Runde ist.',
		name: 'Patrick Beck',
		title: 'Shit Happens',
		betreuung:
			`<h3>Referent</h3> Prof. Börries Müller-Büsching<br>
			<h3>Co-Referent</h3> Prof. Dr. Theo Steiner`
	},
	{
		slug: 'pierrerottmair',
		desc_long:
			'Unter der Berücksichtigung des aktuellen Generationswechsels im Weingut Achenbach habe ich mir zum Anlass genommen eine Neupositionierung durchzuführen. Ich kenne das Weingut schon über 15 Jahre und bin auch mit dem jüngsten Sohn Michael Achenbach sehr gut befreundet. Umso mehr freue ich mich an einem großen neuen Abschnitt im Familienunternehmen mitwirken zu können. Es stand schnell fest, dass ich meine Bachelorarbeit für die Familie Achenbach erstelle. Der Generationswechsel fand nur sehr schleppend statt, da der Vater Gernot bislang an alte Traditionsmuster festhielt und das Weingut gemäß seinen Vorstellungen führte. Doch um dem Weingut einen neuen Anstrich zu verpassen, bringt Frank Achenbach neuen Wind in das Weingut und lässt sich mit hoher Motivation auf folgende Zusammenarbeit ein. Hierfür konzipiere ich einen neuen Imagefilm, eine neue Weinlinie mit neuen Etiketten und einen passenden Flyer.',
		name: 'Pierre Rottmair',
		desc_short: 'Neupositionerung eines Weinguts',
		title: 'Achenbach Weingut',
		betreuung:
			`<h3>Referent</h3> Prof. Taner Ercan<br>
			<h3>Co-Referent</h3> Dipl.-Des. Kai Staudacher`
	},
	{
		slug: 'saragorzelec',
		desc_short:
			'Ein digitales Tool für die individuelle Gestaltung und Verwaltung von Bewerbungsverfahren',
		desc_long:
			'Der Fachkräftemangel sorgt seit Jahren dafür, dass Unternehmen nur schwer geeignetes Personal finden. Davon sind alle Branchen betroffen und einige Existenzen bedroht. Um Bewerber:innen von sich zu überzeugen braucht man neben einem großartigen Angebot, einen schnellen und komfortablen Bewerbungsprozess. Clickin unterstützt Unternehmen dabei einen solchen Bewerbungsprozess digital aufzubauen, durchzuführen und bis zur Einstellung oder Absage zu begleiten. Eine firmeneigene Website wird nicht benötigt.',
		name: 'Sara Gorzelec',
		title: 'Clickin',
		betreuung:
			`<h3>Referent</h3> Prof. Jörg Waldschütz<br>
			<h3>Co-Referent</h3> Dipl.-Des. David Bascom`
	},
	{
		slug: 'sarahullmannsabinevonberger',
		desc_short:
			'Die App zur Unterstützung von Jugendlichen mit Burnout-Symptomen',
		desc_long:
			`Jugendliche können an Burnout erkranken? Ich dachte, das tritt nur bei Erwachsenen mit stressigem Arbeitsalltag auf. Dass Burnout nur Erwachsenen bekommen können, stimmt nicht, denn inzwischen stehen die jungen Leute unter solchem enormen Druck, dass sie selbst potenziell gefährdeter sind denn je. Grund dafür sind das hohe Lerntempo in der Schule, die Erwartungen der Eltern und der Gesellschaft, die zu sehr auf Leistung aus sind. So kommt es durchschnittlich während der Schullaufbahn bei etwa drei bis vier von 25 Schüler*innen zu einer Burnout-Erkrankung. Wegen der vielen Aufgaben vergessen die Jugendlichen in ihrer Freizeit nicht nur zu lernen, sondern auch mal eine Pause einzulegen und sich zu erholen. Hier wollen wir mit unserer App Kimya ansetzen und den gestressten jungen Leuten passende L sungen, aus dem Burnout zu fliehen, anbieten. Das Hauptaugenmerk der App liegt darin, erholsame Auszeiten in den Alltag der Betroffenen zu integrieren. Dazu haben wir auf der Grundlage von Verhaltenstherapien Aufgaben in unterschiedlichen Kategorien wie Familie, Schule und Freizeit erstellt, welche die Nutzer*innen anregen sollen, sich die Zeit für Pausen zu nehmen und dabei zu lernen, dass Auszeiten wichtig für die mentale Gesundheit sind. Um die passende Auswahl treffen zu können, gibt es immer drei Vorschläge, von denen einer ausgewählt werden kann. Für die Erfüllung der Aufgabe hat der/die Nutzer*in ein Zeitfenster von über einer Woche frei zur Verfügung. Uns war es wichtig, deutlich zu machen, dass die App kein zusätzlicher Stressor sein sollte und eine Aufgabe auch gerne mal ausgetauscht werden kann. Für jede abgeschlossene Aufgabe erhält man eine Belohnung durch einen Aufstieg im Level. Mit unserer Begleiterin Kimya haben wir eine persönliche Vertrauensperson für die User*innen in die App integriert. Sie klärt über Burnout auf, begleitet jeden Schritt in der App und hat bei spezifischen Fragen immer ein offenes Ohr für die Betroffenen. Mit ihr kann der/die User*in auch persönlich chatten und ihr Geschichten oder Probleme aus dem Alltag anvertrauen. So lernt sie die Person und ihr Krankheitsbild besser kennen und gibt bessere Ratschläge. Damit bieten wir eine psychische Stütze, die den Nutzer*innen auch mehr Motivation gibt weiter zu machen.

			Da unsere App einen Gamification-Ansatz zur Bewältigung von Burnout verfolgt, haben wir auch interaktive Events in die App eingebunden. Hier kann wöchentlich an einem neuen Spiel, Chat oder Seminar teilgenommen werden. Unter anderem gibt es einen Chatroom, in dem man sich zu einem Unterthema von Burnout untereinander austauschen und eine/n Expertin/Experten um Rat fragen kann, oder man möchte sich eine Auszeit nehmen und bei einer gedanklichen Traumreise mitmachen. Mit den regelmäßigen Terminen zur Entspannung und dem Kontakt zu anderen fördert die App zusätzlich die Routine, Auszeiten zu nehmen und stärkt das Gefühl, nicht alleine zu sein. Durch erreichte Ziele und die damit verbundenen Levelaufstiege bekommt man immer mehr Bereiche freigeschaltet. Somit wächst die App mit jedem Fortschritt, den der/die Nutzer*in erzielt und bietet ihm/ihr Schritt für Schritt Neues zum Entdecken. Die Motivation ebbt somit bis zum Ende nicht ab und der/die Jugendliche findet mit Spaß den Weg zu mehr Entspannung und bestenfalls aus dem Burnout heraus.`,
		name: 'Sarah Ullmann & Sabine von Berger',
		title: 'Kimya',
		betreuung:
			`<h3>Referent</h3> Prof. Dr. Theo Steiner<br>
			<h3>Co-Referent</h3> Dipl.-Des. David Bascom`
	},
	{
		slug: 'saskiabeutler',
		desc_short:
			'Konzeption und Gestaltung eines nachhaltigen Cafés mit integriertem Pop Up-Verkauf',
		desc_long:
			`Recyclen ist gut, Upcyclen noch besser!
			Das Café Grown hat es sich zur Aufgabe gemacht zu einem resscourcenschonenderen Kreislaufsystem beizutragen. Neben einem pflanzenbasierten Speise-und Getränkeangebot hat sich Grown zum Ziel gesetzt, übrig gebliebene Lebensmittelreste nicht wegwerfen zu müssen, sondern zu verwerten. Der eigens entworfene Komposter Multico ist ein multifunktionaler Komposter, der mithilfe von Effektiven Mikronährstoffen Lebensmittelreste in organischen Dünger umwandelt. Dieser gewonnene Dünger kann hierbei zum Eigengebrauch für Zimmerpflanzen und Gemüseanbau genutzt werden. Multico platziert sich in seinen unterschiedlichen Varianten auf den Tischen im Café und kann durch die einfache Handhabung direkt während des Café-Besuchs getestet werden. Durch seine unaufdringliche Erscheinung dient er zudem als formschöner Alltagsgegenstand und lässt sich ganz einfach zu einem Blumentopf umfunktionieren. Durch den integrierten Pop Up-Verkauf ist er vor Ort im Café erwerbbar.`,
		name: 'Saskia Beutler',
		title:
			'Konzeption und Gestaltung eines nachhaltigen Cafés mit integriertem Pop Up-Verkauf',
		betreuung:
			`<h3>Referentin</h3> Prof. Betty Schimmelpfennig<br>
			<h3>Co-Referent</h3> Dipl.-Des. Kai Staudacher`
	},
	{
		slug: 'sevdemazineler',
		desc_long:
			'Die Social Media Algorithmen entscheiden, welche Informationen dir täglich angezeigt und welche aussortiert werden."Infinite Scroll" zeigt dir einen Ausschnitt der etlichen Bereiche, in denen Algorithmen dir maßgeschneiderte Empfehlungen machen und die daraus resultierenden Folgen. Ist die Pandemie wirklich nur eine Lüge der Echsenmenschen oder bist du Fake News zum Opfer gefallen? Hat Big Data Einfluss auf dein Denken; wenn ja, was ist ihr Ziel? Lass dich überraschen und begib dich in die analoge Unendlichkeit.',
		desc_short: 'Editorial Design zum Thema des Einflusses von Social Media',
		name: 'Sevde Mazineler',
		title: 'Infinite Scroll',
		betreuung:
			`<h3>Referent</h3> Prof. Jörg Waldschütz<br>
			<h3>Co-Referent</h3> Dipl.-Des. David Bascom`
	},
	{
		slug: 'sheilamaebreker',
		name: 'Sheila Mae Breker',
		title: 'Moving Fragments',
		desc_short:
			'Experimenteller Fotokurzfilm über das Abhandenkommen von Heimat',
		desc_long:
			'Erinnerungen bewegen sich; verändern sich; lösen sich; brennen sich ein. Erinnerungen haben Wirkung. Und fast immer gibt es hierfür einen Auslöser. Einen Schlüsselreiz, der uns kurzerhand in die Vergangenheit katapultiert. Der experimentelle Fotokurzfilm Moving Fragments beschäftigt sich mit dem Abhandenkommen von Heimat und untersucht die Erinnerungen der drei Protagonisten aus Jordanien. Ein Ausflug in die Köpfe derer, denen oftmals als einziges Andenken an ihre Vergangenheit ihr eigenes Gedankengut bleibt.\n\n\t\tgefördert von Hessenfilm',
		betreuung:
			`<h3>Referent</h3> Prof. Tom Schreiber<br>
			<h3>Co-Referentin</h3> M.A. Laura Padgett`
	},
	{
		slug: 'theresapartschev',
		name: 'Theresa Partschev',
		title: 'KORIOS',
		desc_short: 'Gestaltung einer Onlineplattform zur Förderung von Kindern',
		desc_long:
			'Wir alle wissen, dass jedes Kind ganz eigene, fantastische Talente und Eigenschaften aufweist. Doch dieses Potenzial bleibt in unserem traditionellen Bildungssystem oftmals links liegen. KORIOS ist eine Onlineplattform, die genau das ausgleichen möchte: Sie bietet Kurse an, die das Spiel Dungeons & Dragons nutzen, um die individuellen Talente, den Charakter und das emotionale Bewusstsein von Kindern zu stärken.',
		betreuung:
			`<h3>Referent</h3> Prof. Rüdiger Pichler<br>
			<h3>Co-Referent</h3> Prof. Jörg Waldschütz`
	}
]

absolventinnen = absolventinnen.map((absolventin) => {
	const files = fs.readdirSync(`./src/img/projekte/${absolventin.slug}/`)
	absolventin.videos = []
	absolventin.images = []
	for (let i = files.length - 1; i >= 0; i--) {
		const file = files[i];
		if (file.includes('.mp4')) {
			absolventin.videos.push(file)
		} else if (!file.includes('_thumb') && file.includes('.jpg')) {
			absolventin.images.push(file)
		}
	}
	absolventin.videos.sort()
	absolventin.images.sort().reverse()
	return absolventin
})

module.exports = absolventinnen