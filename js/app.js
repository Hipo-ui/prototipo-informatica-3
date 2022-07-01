Vue.component('app-header', {
    template: `
    <header class="header">
            <!-- Navbar -->
            <div class="container mx-auto flex flex-row justify-between py-2">
                <a href="./index.html" class="flex flex-row items-center gap-x-4">
                    <img src="./img/logos/escudo-unsij-white.png" alt="" width="60"> 
                    <span class="text-xl font-medium py-2 truncate text-white hidden lg:block">Licenciatura en Informática</span>
                    <span class="text-xl font-medium py-2 truncate text-white block lg:hidden">Lic. en Informática</span>
                </a>
                <nav class="flex flex-row items-center">
                    <div class="hidden xl:block">
                        <ul class="flex xl:flex-row gap-x-6 py-2">
                            <li>
                                <slot name="about"></slot>                                
                            </li>
                            <li>
                                <slot name="login-info"></slot>   
                            </li>
                            <li>
                                <slot name="students"></slot>   
                            </li>
                            <li>
                                <slot name="teachers"></slot>   
                            </li>
                            <li>
                                <slot name="contact"></slot>     
                            </li>
                            <li>
                                <slot name="faqs"></slot>    
                            </li>
                        </ul>
                    </div>
                    <div class="xl:hidden m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 p-1 stroke-white hover:rounded-full hover:bg-primary-600" id="menu-botton" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </div>                        
                </nav>                
            </div>
            <!-- /Navbar -->

            <!-- Cinta -->
            <div class="brand hidden xl:block">
                <nav class="container mx-auto flex justify-end py-2">
                    <ul class="flex flex-row gap-x-28">
                        <li>
                            <a href="http://www.unsij.edu.mx/webmail/src/login.php" target="_blank"
                                class="flex flex-row gap-x-1 items-center brand-link">
                                <svg xmlns="http://www.w3.org/2000/svg" class="brand-link-icon" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Correo institucional</a>
                        </li>
                        <li>
                            <a href="https://aula.unsij.edu.mx/moodle/login/index.php" target="_blank"
                                class="flex flex-row gap-x-1 items-center brand-link">
                                <svg xmlns="http://www.w3.org/2000/svg" class="brand-link-icon" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                                Aula virtual</a>
                        </li>
                        <li>
                            <a href="https://alumnos.unsij.edu.mx/user_sessions/new" target="_blank"
                                class="flex flex-row gap-x-1 items-center brand-link">
                                <svg xmlns="http://www.w3.org/2000/svg" class="brand-link-icon" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                NES</a>
                        </li>
                        <li>
                            <a href="http://lectus.unsij.edu.mx:8080/lectus/" target="_blank"
                                class="flex flex-row gap-x-1 items-center brand-link">
                                <svg xmlns="http://www.w3.org/2000/svg" class="brand-link-icon" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                LECTUS</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- /Cinta -->
        </header>
    `
});

Vue.component('app-menu-mobile', {
    template: `
    <div class="hidden xl:hidden absolute z-10 header py-8" id="menu">
        <nav class="container mx-auto">               
            <ul class="flex flex-col gap-6 text-lg border-">            
                <li>
                    <slot name="about"></slot>                                
                </li>
                <li>
                    <slot name="login-info"></slot>   
                </li>
                <li>
                    <slot name="students"></slot>   
                </li>
                <li>
                    <slot name="teachers"></slot>   
                </li>
                <li>
                    <slot name="contact"></slot>     
                </li>
                <li>
                    <slot name="faqs"></slot>    
                </li>
                <li>
                    <hr>   
                </li>
                <li>
                    <a href="http://www.unsij.edu.mx/webmail/src/login.php" target="_blank"
                        class="brand-link">                        
                        Correo institucional
                    </a>
                </li>
                <li>
                    <a href="https://aula.unsij.edu.mx/moodle/login/index.php" target="_blank"
                        class="brand-link">                        
                        Aula virtual
                    </a>
                </li>
                <li>
                    <a href="https://alumnos.unsij.edu.mx/user_sessions/new" target="_blank"
                        class="brand-link">
                        NES
                    </a>
                </li>
                <li>
                    <a href="http://lectus.unsij.edu.mx:8080/lectus/" target="_blank"
                        class="brand-link">
                        LECTUS
                    </a>
                </li>
            </ul>
            <div class="flex flex-row justify-end my-1 border-">
                <button class="text-white bg-primary-600 p-3 rounded-full select-none hover:bg-primary-700" id="btn-close">Cerrar</button>
            </div>
        </nav>                     
    </div>
    `
})

Vue.component('app-footer', {
    template: `
    <footer class="footer">
        <div class="container mx-auto grid md:grid-cols-3 gap-16 justify-center">
            <div class="flex flex-col lg:flex-row gap-8 justify-center items-center">
                <div class="mx-auto">
                    <a href="http://www.unsij.edu.mx/" target="_blank">
                        <img src="./img/logos/escudo-unsij-white.png" alt="" class="h-28 w-auto object-cover">
                    </a>
                </div>
                <div class="mx-auto">
                    <a href="http://www.suneo.mx/" target="_blank">
                        <img src="./img/logos/suneo.png" alt="" class="h-14 w-auto object-cover">
                    </a>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <div>
                    <header class="footer-title">Contacto</header>
                    <hr class="title_line mx-0">
                </div>
                <a href="https://goo.gl/maps/1HaMWs4H2GPHsqrJ7" target="_blank" class="footer-link">                    
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    Camino a la Universidad S/N, 68725 Ixtlán de Juárez, Oax.</a>
                <a href="mailto:informatica@unsij.edu.mx" class="footer-link">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>                    
                    informatica@unsij.edu.mx</a>
                <a href="tel:951 553 63 62" class="footer-link">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>                    
                    951 553 63 62</a>
            </div>

            <div class="flex flex-col gap-8">
                <div>
                    <header class="footer-title">Síguenos</header>
                    <hr class="title_line mx-0">
                </div>
                <div class="grid grid-cols-2 gap-8">
                    <a href="https://www.facebook.com/InformaticaUNSIJ/" target="_blank" class="footer-social_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook w-9 h-9" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com/unsij_suneo?lang=es" target="_blank" class="footer-social_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter w-9 h-9" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/explore/locations/292170188/universidad-de-la-sierra-juarez/?hl=es-la" target="_blank" class="footer-social_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-instagram w-9 h-9" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                    </a> 
                    <a href="https://www.youtube.com/c/UNSIJ_SUNEO" target="_blank" class="footer-social_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-youtube w-9 h-9" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                        </svg>
                    </a>                                       
                </div>
            </div>
        </div>
    </footer>
    `
})

Vue.component('app-notice', {
    template: `
    <article class="aside_item-notice">
        <header class="aside_item-title">
            <slot name="title"></slot>
        </header>
        <p class="aside_item-description">
            <slot name="description"></slot>
        </p>
        <p class="aside_item-date">
            <svg xmlns="http://www.w3.org/2000/svg" class="aside_item-date-icon"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
            <slot name="date"></slot>
            </span>
        </p>
    </article>
    `
})

Vue.component('app-event', {
    template: `
    <article class="aside_item-event">
        <slot name="image"></slot>        
        <div class="aside_item-content">
            <header class="aside_item-title">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                </div>
                <p><slot name="title"></slot></p>
            </header>
        </div>
    </article>
    `
})

Vue.component('app-work', {
    template: `
    <div class="work_item swiper-slide">
        <div class="work_item-content_image">            
            <slot name="image"></slot>      
        </div>
        <div class="work_item-content_text">
            <header class="subtitle">
                <slot name="title"></slot>
            </header>

            <p class="content_text-dark">
                <slot name="description"></slot>
            </p>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    `
})


Vue.component('app-requirement', {
    template: `
    <div class="requirement_item">
        <div class="requirement_item-content">
            <p>
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="requirement_item-content-icon-svg" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            <div class="content_text-dark">
                <slot name="description"></slot>
            </div>
            </p>
        </div>
    </div>
    `
})

Vue.component('app-date', {
    template: `
    <div class="date_item">
        <div class="date_item-content_icon">
            <div class="date_item-content_icon-form">
                <span class="date_item-content_icon-form-number">
                <slot name="number"></slot>
                </span>
            </div>
        </div>
        <div class="date_item-content_text">
            <p class="content_text-emphasis">
                <slot name="title"></slot>
            </p>
            <p class="content_text-dark">
                <slot name="description"></slot>
            </p>
        </div>
    </div>
    `
})

Vue.component('app-vacant', {
    template: `
    <a href="" class="vacant_item">
        <div class="vacant_item-content">
            <div>
                <p class="subtitle xl:truncate">
                <slot name="title"></slot>
                </p>
            </div>
            <div>
                <p class="content_text-dark">
                    <slot name="description"></slot>
                </p>
            </div>
            <div class="vacant_item-content-date">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                <slot name="date"></slot>
                </span>
            </div>
        </div>
    </a>
    `
})

Vue.component('app-profile', {
    template: `
    <div class="user_item">
        <a href="" class="user_item-link">
            <div class="user_item-content_image">
                <slot name="image"></slot>
            </div>
            <div class="text-center">
                <header class="subtitle">
                    <slot name="name"></slot>
                </header>
            </div>
        </a>
        <div class="user_item-content_text">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>          
            </div>                                                                    
            <p>
                <slot name="email"></slot> 
            </p> 
        </div>
    </div>
    `
})

new Vue({
    el: '#app'
})