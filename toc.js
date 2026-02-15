// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="day01.html"><strong aria-hidden="true">1.</strong> Day01|前言：區塊鏈的誕生</a></li><li class="chapter-item expanded "><a href="day02.html"><strong aria-hidden="true">2.</strong> Day02|打造一個簡易的區塊鏈(1)：定義格式</a></li><li class="chapter-item expanded "><a href="day03.html"><strong aria-hidden="true">3.</strong> Day03|打造一個簡易的區塊鏈(2)：產生創世塊與挖掘新區塊</a></li><li class="chapter-item expanded "><a href="day04.html"><strong aria-hidden="true">4.</strong> Day04|打造一個簡易的區塊鏈(3)：難度調整與確認哈希鏈</a></li><li class="chapter-item expanded "><a href="day05.html"><strong aria-hidden="true">5.</strong> Day05|打造一個簡易的區塊鏈(4)：公、私鑰與簽章</a></li><li class="chapter-item expanded "><a href="day06.html"><strong aria-hidden="true">6.</strong> Day06|打造一個簡易的區塊鏈(5)：節點與使用者的溝通</a></li><li class="chapter-item expanded "><a href="day07.html"><strong aria-hidden="true">7.</strong> Day07|打造一個簡易的區塊鏈(6)：節點間的同步與廣播</a></li><li class="chapter-item expanded "><a href="day08.html"><strong aria-hidden="true">8.</strong> Day08|密碼學初探(1)：編碼與壓縮</a></li><li class="chapter-item expanded "><a href="day09.html"><strong aria-hidden="true">9.</strong> Day09|密碼學初探(2)：哈希(湊雜)</a></li><li class="chapter-item expanded "><a href="day10.html"><strong aria-hidden="true">10.</strong> Day10|密碼學初探(3)：古典加密</a></li><li class="chapter-item expanded "><a href="day11.html"><strong aria-hidden="true">11.</strong> Day11|密碼學初探(4)：現代加密─XOR與SPN加密</a></li><li class="chapter-item expanded "><a href="day12.html"><strong aria-hidden="true">12.</strong> Day12|密碼學初探(5)：現代加密─Feistel與區塊加密</a></li><li class="chapter-item expanded "><a href="day13.html"><strong aria-hidden="true">13.</strong> Day13|密碼學初探(6)：Merkle Tree</a></li><li class="chapter-item expanded "><a href="day14.html"><strong aria-hidden="true">14.</strong> Day14|密碼學初探(7)：非對稱加密與數位簽章</a></li><li class="chapter-item expanded "><a href="day15.html"><strong aria-hidden="true">15.</strong> Day15|密碼學初探(8)：零知識證明</a></li><li class="chapter-item expanded "><a href="day16.html"><strong aria-hidden="true">16.</strong> Day16|關於挖礦的兩三事(1)：原理應用與礦池</a></li><li class="chapter-item expanded "><a href="day17.html"><strong aria-hidden="true">17.</strong> Day17|關於挖礦的兩三事(2)：抗ASIC演算法</a></li><li class="chapter-item expanded "><a href="day18.html"><strong aria-hidden="true">18.</strong> Day18|關於挖礦的兩三事(3)：挖礦實戰</a></li><li class="chapter-item expanded "><a href="day19.html"><strong aria-hidden="true">19.</strong> Day19|關於挖礦的兩三事(4)：礦工間的戰爭</a></li><li class="chapter-item expanded "><a href="day20.html"><strong aria-hidden="true">20.</strong> Day20|P2P網路(1)：P2P網路基礎知識</a></li><li class="chapter-item expanded "><a href="day21.html"><strong aria-hidden="true">21.</strong> Day21|P2P網路(2)：共識─拜占庭將軍問題</a></li><li class="chapter-item expanded "><a href="day22.html"><strong aria-hidden="true">22.</strong> Day22|P2P網路(3)：暫時性分岔與叔塊獎勵</a></li><li class="chapter-item expanded "><a href="day23.html"><strong aria-hidden="true">23.</strong> Day23|P2P網路(4)：升級之路上的岔路口-軟分岔與硬分岔</a></li><li class="chapter-item expanded "><a href="day24.html"><strong aria-hidden="true">24.</strong> Day24|現實中的區塊鏈(1)：區塊鏈與代幣的發展</a></li><li class="chapter-item expanded "><a href="day25.html"><strong aria-hidden="true">25.</strong> Day25|現實中的區塊鏈(2)：Bitcoin與Ethereum的交易架構</a></li><li class="chapter-item expanded "><a href="day26.html"><strong aria-hidden="true">26.</strong> Day26|現實中的區塊鏈(3)：Bitcoin的發展與路線之爭</a></li><li class="chapter-item expanded "><a href="day27.html"><strong aria-hidden="true">27.</strong> Day27|現實中的區塊鏈(4)：用Command Line操作Bitcoin</a></li><li class="chapter-item expanded "><a href="day28.html"><strong aria-hidden="true">28.</strong> Day28|現實中的區塊鏈(5)：Ethereum的EVM與智能合約</a></li><li class="chapter-item expanded "><a href="day29.html"><strong aria-hidden="true">29.</strong> Day29|現實中的區塊鏈(6)：基礎智能合約語法</a></li><li class="chapter-item expanded "><a href="day30.html"><strong aria-hidden="true">30.</strong> Day30|現實中的區塊鏈(7)：智能合約的使用與操作</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
