import "./style.css";
import { Page } from "./rlib/timeline/t2025/may/HtmlToMyLib/index";
// import { TestCases } from "./rlib/timeline/t2025/may/HtmlToMyLib/Testcases";

let htmlString = `
<main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Main Content Area</h1>
    <p>Scroll down to see the sticky header in action.</p>
    <div class="h-screen"></div>
    <p>Continue scrolling...</p>
    <div class="h-screen"></div>
</main>
`;
// TestCases.test1();
// TestCases.test2();
// const parser = new HTMLParseAndMyLib();
// parser.set_text(htmlString);
// parser.parseToString().then((res) => {
//     console.log(res);
// });

const page = Page();

document.querySelector<HTMLDivElement>("#app")!.appendChild(page.getElement());
