<template>
        <nav>
        <div class="nav-container">
            <div id="logo">
                <NuxtLink to="/"> <img src="~/assets/img/wish-logo-800.png" /></NuxtLink>
               
            </div>
            <ul id="icons">
                <li>
                    <NuxtLink to="/"><i class="fas fa-user"></i></NuxtLink>
         
                </li>
                <li><NuxtLink to="/whishlist"><i class="fas fa-heart"></i></NuxtLink></li>
                <li>
                    <NuxtLink to="/card"><i class="fas fa-shopping-cart"></i></NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>