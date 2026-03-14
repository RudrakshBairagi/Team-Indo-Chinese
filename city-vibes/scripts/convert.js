const fs = require('fs');

function convertHtmlToJsx(html) {
    let jsx = html.replace(/class=/g, 'className=');
    jsx = jsx.replace(/<!--(.*?)-->/g, '{/* $1 */}');
    jsx = jsx.replace(/style=""/g, ''); 
    jsx = jsx.replace(/<input(.*?)>/g, (match, attrs) => {
        if(match.endsWith('/>')) return match;
        return `<input${attrs}/>`;
    });
    jsx = jsx.replace(/stroke-linecap="/g, 'strokeLinecap="');
    jsx = jsx.replace(/stroke-linejoin="/g, 'strokeLinejoin="');
    jsx = jsx.replace(/stroke-width="/g, 'strokeWidth="');
    jsx = jsx.replace(/fill-opacity="/g, 'fillOpacity="');
    jsx = jsx.replace(/stroke-opacity="/g, 'strokeOpacity="');
    jsx = jsx.replace(/ for="/g, ' htmlFor="');
    jsx = jsx.replace(/<a(.*?)href="\.\.\/events_page\/events\.html"(.*?)>/g, '<Link$1href="/events"$2>');
    jsx = jsx.replace(/<a(.*?)href="\.\.\/home_page\/home\.html"(.*?)>/g, '<Link$1href="/"$2>');
    jsx = jsx.replace(/<a(.*?)href="(.*?)"(.*?)>/g, '<Link$1href="$2"$3>');
    jsx = jsx.replace(/<\/a>/g, '</Link>');
    jsx = jsx.replace(/viewbox/g, 'viewBox');
    return jsx;
}

const homeHtml = fs.readFileSync('/Users/rudraksh/Desktop/Indo-chinese/home_page/home.html', 'utf8');
const eventsHtml = fs.readFileSync('/Users/rudraksh/Desktop/Indo-chinese/events_page/events.html', 'utf8');

const homeStart = homeHtml.indexOf('<!-- BEGIN: Stories Section -->');
const homeEnd = homeHtml.indexOf('<!-- BEGIN: Sticky Navigation -->');
const homeContent = homeHtml.substring(homeStart, homeEnd);

const eventsStart = eventsHtml.indexOf('<!-- Filter Chips -->');
const eventsEnd = eventsHtml.indexOf('<!-- Bottom Navigation Bar -->');
const eventsContent = eventsHtml.substring(eventsStart, eventsEnd);

const homeJsx = `import Link from 'next/link';\n\nexport default function Home() {\n  return (\n    <main className="flex-1 overflow-y-auto w-full pb-32">\n${convertHtmlToJsx(homeContent)}\n    </main>\n  );\n}\n`;
const eventsJsx = `import Link from 'next/link';\n\nexport default function Events() {\n  return (\n    <main className="flex-1 overflow-y-auto w-full pb-32">\n${convertHtmlToJsx(eventsContent)}\n    </main>\n  );\n}\n`;

fs.writeFileSync('/Users/rudraksh/Desktop/Indo-chinese/city-vibes/src/app/page.tsx', homeJsx);
fs.writeFileSync('/Users/rudraksh/Desktop/Indo-chinese/city-vibes/src/app/events/page.tsx', eventsJsx);

