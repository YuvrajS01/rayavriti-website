/**
 * Components Loader
 * Dynamically loads header and footer components into pages
 */

(function () {
    'use strict';

    // Get current page name for active nav highlighting
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop().replace('.html', '') || 'index';
        return page;
    }

    // Initialize hamburger menu functionality
    function initHamburgerMenu() {
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileNav = document.getElementById('mobileNav');

        if (!hamburgerBtn || !mobileNav) return;

        hamburgerBtn.addEventListener('click', () => {
            const isOpen = mobileNav.classList.toggle('is-open');
            hamburgerBtn.classList.toggle('is-active');
            hamburgerBtn.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburgerBtn.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileNav.classList.remove('is-open');
                hamburgerBtn.classList.remove('is-active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Set active nav link based on current page
    function setActiveNavLink() {
        const currentPage = getCurrentPage();

        // Desktop nav links
        const navLinks = document.querySelectorAll('.header__nav-link[data-page]');
        navLinks.forEach(link => {
            if (link.dataset.page === currentPage) {
                link.classList.add('header__nav-link--active');
            }
        });

        // Mobile nav links
        const mobileNavLinks = document.querySelectorAll('.header__mobile-nav-link[data-page]');
        mobileNavLinks.forEach(link => {
            if (link.dataset.page === currentPage) {
                link.classList.add('header__mobile-nav-link--active');
            }
        });
    }

    // Load component HTML into placeholder
    async function loadComponent(placeholderId, componentPath) {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) return;

        try {
            const response = await fetch(componentPath);
            if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
            const html = await response.text();
            placeholder.innerHTML = html;
            return true;
        } catch (error) {
            console.error(`Error loading component: ${error.message}`);
            return false;
        }
    }

    // ========================================
    // SCROLL REVEAL ANIMATIONS
    // ========================================

    function initScrollReveal() {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        // Select all reveal elements
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

        if (revealElements.length === 0) return;

        // Create IntersectionObserver
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optionally unobserve after revealing
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all reveal elements
        revealElements.forEach(el => revealObserver.observe(el));
    }

    // ========================================
    // STAGGER REVEAL FOR GRIDS
    // ========================================

    function initStaggerReveal() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const staggerContainers = document.querySelectorAll('.reveal-stagger');

        if (staggerContainers.length === 0) return;

        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('is-visible');
                        }, index * 100);
                    });
                    staggerObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        staggerContainers.forEach(el => staggerObserver.observe(el));
    }

    // Initialize components
    async function init() {
        // Load header
        const headerLoaded = await loadComponent('header-placeholder', 'components/header.html');
        if (headerLoaded) {
            setActiveNavLink();
            initHamburgerMenu();
        }

        // Load footer
        await loadComponent('footer-placeholder', 'components/footer.html');

        // Initialize scroll reveal animations
        initScrollReveal();
        initStaggerReveal();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
