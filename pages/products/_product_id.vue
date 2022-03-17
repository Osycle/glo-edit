<template>
  <div class="product">
    <div class="container-x pv-10">
      <div class="breadcrumb">
        <ul v-if="$i18n.locale != 'uz'">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="">{{current_product.name}}</nuxt-link></li>
        </ul>
        <ul v-else>
          <li><nuxt-link to="/">Bosh sahifa</nuxt-link></li>
          <li><nuxt-link to="">{{current_product.name}}</nuxt-link></li>
        </ul>
      </div>
      <div class="product-content">
        <div class="row">
          <div class="col-md-5 img-content">
            <div class="swiper mySwiper2">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(img, key) in current_product.images" :key="key">
                  <img :src="img"  zoom-i :data-zoom-image="img" />
                </div>
              </div>
            </div>
            <div thumbsSlider="" class="swiper mySwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(img, key) in current_product.images" :key="key">
                  <img :src="img" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7 text-content" v-if="$i18n.locale != 'uz'">
            <div class="cap-content fw-8">
              <h1>{{current_product.name}}</h1>
            </div>
            <div class="desc-content mt-5">
                <div class="fw-6 text-x5 mb-1">Формат Деми</div>
                <div><nuxt-link to="/warranty/">Узнайте больше</nuxt-link> о гарантии</div>
                <div>{{current_product.price_manager | spaceBetweenNum}} сум при покупке у <nuxt-link to="/testdrive/">персонального менеджера </nuxt-link>*</div>
                <div>{{current_product.price | spaceBetweenNum}} сум цена в розницу *</div>
                <br>
                <div>* Рекомендованная цена</div>
            </div>
          </div>
          <div class="col-md-7 text-content" v-else>
            <div class="cap-content fw-8">
              <h1>{{current_product.name}}</h1>
            </div>
            <div class="desc-content mt-5">
                <div class="fw-6 text-x5 mb-1">Demi formati</div>
                <div class="text-x3">Kafolat haqida <nuxt-link to="/warranty/">ko‘proq bilib oling</nuxt-link></div>
                <div><nuxt-link to="/testdrive/">Shaxsiy menejerdan</nuxt-link>xarid qilish narxi {{current_product.price_manager | spaceBetweenNum}} so‘m *</div>
                <div>Chakana narxi {{current_product.price | spaceBetweenNum}} so‘m *</div>
                <br>
                <div>* Tavsiya etilayotgan chakana narxi</div>
            </div>
          </div>
        </div>
        <div v-if="$i18n.locale != 'uz'"> 
          <div class="nav-def mv-4 mv-5 responsive-tab">
            <ul class="list">
              <li><a href="#eqsys-1">Описание</a></li>
              <li><a href="#eqsys-2">Что внутри?</a></li>
              <li><a href="#eqsys-3">Как чистить?</a></li>
            </ul>
            <div class="pantab" id="eqsys-1">
              <div class="wrapper pv-5">
                <div>
                  <div>Устройство с технологией индукционного нагревания табака</div>
                  <br>
                  <div class="flex fw-wrap format-items">
                    <div class="item flex ai-center mv-7 ph-3 item-demi">
                      <div class="img-content">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="40" cy="40" r="40" class="format-circle" />
                          <path d="M30.1007 30.1006L24.4438 24.4437" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                          <path d="M24.4437 31.5148V24.4437H31.5148" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                          <path d="M49.8993 49.8994L55.5562 55.5563" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                          <path d="M55.5563 48.4852L55.5563 55.5563L48.4852 55.5563" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                          <path d="M30.1002 49.8994L24.4434 55.5563" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                          <path d="M31.5145 55.5563L24.4435 55.5563L24.4435 48.4852" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                          <path d="M49.8998 30.1006L55.5566 24.4437" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                          <path d="M48.4855 24.4437L55.5565 24.4437L55.5565 31.5148" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Деми формат</h4>
                        <div>Увеличенный размер нагревательной камеры по сравнению с устройствами формата Нано.</div>
                      </div>
                    </div>
                    <div class="item flex ai-center mv-7 ph-3 item-boost">
                      <div class="img-content">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="40" cy="40" r="40" class="format-circle"></circle>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M41.2757 28.1939C40.6468 27.8215 40.439 27.01 40.8114 26.3804L43.8852 21.1886C44.2576 20.5596 45.0685 20.3518 45.6981 20.7242C46.327 21.0967 46.5349 21.9082 46.163 22.5371L43.0892 27.7296C42.7162 28.3579 41.9047 28.5664 41.2757 28.1939Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6747 51.762C39.3103 52.1242 39.5319 52.9316 39.1703 53.5671L36.1848 58.81C35.8232 59.4456 35.0153 59.6672 34.3803 59.3062C33.7448 58.944 33.5231 58.136 33.8848 57.5011L36.8696 52.2576C37.2313 51.6226 38.0392 51.4004 38.6747 51.762Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M51.8183 41.2743C52.1908 40.6454 53.0029 40.437 53.6318 40.81L58.8237 43.8838C59.4526 44.2556 59.6605 45.0672 59.2886 45.6961C58.9156 46.3256 58.1041 46.5335 57.4751 46.161L52.2827 43.0879C51.6543 42.7148 51.4459 41.9033 51.8183 41.2743Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M28.2491 38.6721C27.8875 39.3071 27.0796 39.5287 26.4446 39.1671L21.2011 36.1822C20.5656 35.8206 20.3439 35.0127 20.7056 34.3777C21.0672 33.7422 21.8751 33.5205 22.5107 33.8822L27.7542 36.867C28.3891 37.2287 28.6108 38.0366 28.2491 38.6721Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M49.2551 32.5508C49.0737 31.8425 49.5008 31.1217 50.209 30.9403L56.0532 29.4421C56.7614 29.2607 57.4823 29.6878 57.6643 30.3961C57.8457 31.1037 57.4186 31.8251 56.7104 32.0065L50.8662 33.5041C50.1579 33.6855 49.4371 33.259 49.2551 32.5508Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.7501 47.3767C30.9435 48.0814 30.529 48.81 29.8238 49.0034L24.0054 50.6001C23.3008 50.7935 22.5727 50.379 22.3793 49.6738C22.1859 48.9692 22.6004 48.2405 23.305 48.0477L29.1234 46.4505C29.8286 46.2576 30.5566 46.6715 30.7501 47.3767Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M47.4549 49.2535C48.1631 49.0721 48.8839 49.4992 49.0653 50.2074L50.5629 56.0516C50.7449 56.7599 50.3178 57.4807 49.6096 57.6627C48.9013 57.8441 48.1805 57.417 47.9991 56.7088L46.5009 50.8646C46.3195 50.1564 46.7466 49.4355 47.4549 49.2535Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M32.6351 30.7489C31.9305 30.9423 31.2019 30.5278 31.0084 29.8226L29.4118 24.0042C29.2184 23.2996 29.6328 22.5715 30.3375 22.3775C31.0427 22.1847 31.7707 22.5992 31.9642 23.3038L33.5614 29.1222C33.7548 29.8274 33.3398 30.5554 32.6351 30.7489Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M28.6076 43.3487C28.5043 44.0725 27.8339 44.5753 27.11 44.472L21.1373 43.619C20.4134 43.5157 19.9106 42.8453 20.0139 42.122C20.1173 41.3982 20.7876 40.8954 21.5115 40.9987L27.4843 41.8517C28.2081 41.955 28.7109 42.6254 28.6076 43.3487Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M51.3771 36.7343C51.4678 36.0087 52.1298 35.4951 52.8554 35.5858L58.842 36.3373C59.567 36.428 60.0812 37.0899 59.9905 37.815C59.8992 38.5406 59.2372 39.0542 58.5122 38.9635L52.5256 38.2121C51.8 38.1213 51.2864 37.4594 51.3771 36.7343Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6573 28.607C35.9334 28.5037 35.4306 27.8333 35.534 27.1095L36.387 21.1367C36.4903 20.4129 37.1607 19.9101 37.8839 20.0134C38.6077 20.1167 39.1105 20.7871 39.0072 21.511L38.1548 27.4837C38.0515 28.207 37.3811 28.7104 36.6573 28.607Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M43.2712 51.3768C43.9962 51.4675 44.5104 52.1295 44.4191 52.8546L43.6676 58.8417C43.5769 59.5668 42.915 60.081 42.1899 59.9897C41.4649 59.899 40.9507 59.237 41.0414 58.512L41.7929 52.5254C41.8836 51.7997 42.5455 51.2861 43.2712 51.3768Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M29.5792 34.3099C28.9947 34.7484 28.1651 34.6301 27.7266 34.0456L24.1056 29.2184C23.6671 28.6339 23.7854 27.8043 24.3705 27.3658C24.955 26.9273 25.7846 27.0457 26.2231 27.6301L29.8435 32.4574C30.282 33.0418 30.1643 33.8714 29.5792 34.3099Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M50.3583 45.7333C50.9356 45.2846 51.767 45.3891 52.2157 45.9664L55.9178 50.7305C56.3659 51.3078 56.2614 52.1392 55.6841 52.5879C55.1069 53.036 54.2755 52.9315 53.8274 52.3542L50.1253 47.5901C49.6765 47.0128 49.7811 46.1814 50.3583 45.7333Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M45.6972 29.5799C45.2587 28.9949 45.377 28.1659 45.9615 27.7274L50.7881 24.1064C51.3726 23.6678 52.2022 23.7862 52.6413 24.3713C53.0798 24.9557 52.9615 25.7853 52.3764 26.2238L47.5497 29.8442C46.9647 30.2828 46.1351 30.1644 45.6972 29.5799Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2777 50.3568C34.7264 50.9341 34.6219 51.7655 34.0446 52.2142L29.2799 55.9157C28.7032 56.3644 27.8712 56.2599 27.4231 55.6827C26.9744 55.1054 27.0789 54.274 27.6562 53.8253L32.4203 50.1238C32.9976 49.675 33.829 49.7796 34.2777 50.3568Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Функция Boost</h4>
                        <div>Ускоренный нагрев устройства за 15 секунд.</div>
                      </div>
                    </div>
                    <div class="item flex ai-center mv-7 ph-3 item-light">
                      <div class="img-content">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="40" cy="40" r="40" class="format-circle" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M47.0052 20L27 43.2668H38.0039L33.0417 59.1304L53.087 35.8395H42.0148L47.0052 20Z" fill="#232525" />
                        </svg>
                      </div>
                      <div class="desc-content ml-3">
                        <h4>До 20 сессий на одном заряде</h4>
                        <div>Зарядка устройства занимает до 2 часов и обеспечивает до 20 сеансов использования.</div>
                      </div>
                    </div>
                    <div class="item flex ai-center mv-7 ph-3">
                      <div class="img-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                          <circle cx="40" cy="40" r="40" class="format-circle" />
                          <path xmlns="http://www.w3.org/2000/svg" d="M3.5,44c0,4.6,11.3,7,22.5,7s22.5-2.4,22.5-7c0-3.9-8.5-6.2-17.5-6.8L39,23.5C44.8,13.5,37.6,1,26,1   C14.4,1,7.2,13.5,13,23.5l7.9,13.7C12,37.8,3.5,40.1,3.5,44z M26,3c10,0,16.3,10.8,11.3,19.5L26.7,40.9c-0.2,0.4-0.5,0.4-0.7,0.4   s-0.5,0-0.7-0.4L14.7,22.5C9.7,13.8,16,3,26,3z M22,39.2l1.6,2.7c0.5,0.9,1.4,1.4,2.4,1.4s1.9-0.5,2.4-1.4l1.6-2.7   c10.7,0.6,16.6,3.2,16.6,4.9c0,2-8,5-20.5,5c-12.5,0-20.5-2.9-20.5-5C5.5,42.4,11.4,39.7,22,39.2z" style="transform: translate(15px, 11px);position: relative;" />
                          <path xmlns="http://www.w3.org/2000/svg" d="M32.6,14.3c0-3.6-3-6.6-6.6-6.6s-6.6,3-6.6,6.6s3,6.6,6.6,6.6S32.6,18,32.6,14.3z M21.4,14.3c0-2.5,2.1-4.6,4.6-4.6   c2.5,0,4.6,2.1,4.6,4.6c0,2.5-2.1,4.6-4.6,4.6C23.5,18.9,21.4,16.9,21.4,14.3z" style="transform: translate(15px, 11px);position: relative;" />
                        </svg>
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Можно использовать когда угодно</h4>
                        <!-- <div>Увеличенный размер нагревательной камеры по сравнению с устройствами формата Нано.</div> -->
                      </div>
                    </div>
                  </div>
                  <br>
                  <a href="https://telegra.ph/RUKOVODSTVO-POLZOVATELYA-01-18" nofollow target="_blank"><u><big>Руководство пользователя model G403</big></u></a>
                </div>
              </div>
            </div>
            <div class="pantab" id="eqsys-2">
              <div class="wrapper pv-5 box-lg-6">
                <div>
                  <div>Содержимое коробки:</div>
                  <br>
                  <div>1x устройство glo™</div>
                  <div>1x щеточка для чистки glo™</div>
                  <div>1x USB-С кабель для зарядки glo™</div>
                  <div>1x руководство пользователя glo™</div>
                </div>
              </div>
            </div>
            <div class="pantab" id="eqsys-3">
              <div class="wrapper pv-5 box-lg-7 desktop:pr-15">
                <div>
                  <div class="mb-2">
                    Для качественной работы устройства необходимо чистить его после каждых 20 сеансов использования, 
                    а при регулярном использовании функции Boost после каждых 10 сеансов. 
                    Используй щеточку, чтобы прочищать камеру нагревания. 
                    Также удаляй лишнюю влагу, чтобы устройство работало дольше.
                  </div>
                  <br>
                  <div class="cleaning-items flex text-center mobile:jc-center mobile:fw-wrap">
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-1.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Возьми палочку для чистки glo™ из упаковки
                        </div>
                      </div>
                    </div>
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-2.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Открой верхний затвор
                        </div>
                      </div>
                    </div>
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-3.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Открой нижнюю дверцу
                        </div>
                      </div>
                    </div>
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-4.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Тщательно прочисть внутреннюю камеру.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="nav-def mv-4 mv-5 responsive-tab">
            <ul class="list">
              <li><a href="#eqsys-1">Tavsif</a></li>
              <li><a href="#eqsys-2">To‘plamda nima bor?</a></li>
              <li><a href="#eqsys-3">Qanday tozalanadi?</a></li>
            </ul>
            <div class="pantab" id="eqsys-1">
              <div class="wrapper pv-5">
                <div>
                  <div>Tamakini induksion qizdirish texnologiyasiga ega moslama</div>
                  <br>
                  <div class="flex fw-wrap format-items row-3">
                    <div class="item flex ai-center mv-7 ph-3">
                      <div class="img-content">
                        <img src="/img/other/desc-icon-demi.svg" alt="">
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Demi formati</h4>
                        <div>Nano formatli moslamalarga nisbatan kattaroq qizdirish kamerasi.</div>
                      </div>
                    </div>
                    <div class="item flex ai-center mv-7 ph-3">
                      <div class="img-content">
                        <img src="/img/other/desc-icon-boost.svg" alt="">
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Boost funktsiyasi</h4>
                        <div>15 soniyada tezlashtirilgan qizdirish.</div>
                      </div>
                    </div>
                    <div class="item flex ai-center mv-7 ph-3">
                      <div class="img-content">
                        <img src="/img/other/desc-icon-lightning.svg" alt="">
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Bir zaryadda 20 ta gacha sessiya</h4>
                        <div>Moslamani zaryadlash 2 soatgacha vaqt talab qiladi va 20 ta sessiyagacha foydalanishni ta’minlaydi.</div>
                      </div>
                    </div>
                    <div class="item flex ai-center mv-7 ph-3">
                      <div class="img-content">
                        <img src="/img/other/desc-icon-navigation.svg" alt="">
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Istalgan vaqtda foydalanish mumkin</h4>
                        <!-- <div>Увеличенный размер нагревательной камеры по сравнению с устройствами формата Нано.</div> -->
                      </div>
                    </div>
                  </div>
                  <br>
                  <a href="https://telegra.ph/RUKOVODSTVO-POLZOVATELYA-01-18" nofollow target="_blank"><u><big>G403 modeli uchun Foydalanuvchi qo‘llanmasi</big></u></a>
                </div>
              </div>
            </div>
            <div class="pantab" id="eqsys-2">
              <div class="wrapper pv-5 box-lg-6">
                <div>
                  <div>Qutining tarkibi:</div>
                  <br>
                  <div>1x glo moslamasi</div>
                  <div>1x glo tozalash cho‘tkasi</div>
                  <div>1x USB-C glo zaryadlovchi kabeli</div>
                  <div>1x glo foydalanuvchi qo‘llanmasi </div>
                </div>
              </div>
            </div>
            <div class="pantab" id="eqsys-3">
              <div class="wrapper pv-5 box-lg-7 desktop:pr-15">
                <div>
                  <div class="mb-2">
                    Moslamaning sifatli ishlashini ta’minlash uchun uni har 20 seans foydalanishdan keyin, va agar BOOST funksiyasidan muntazam foydalanilsa har 10 seansdan keyin tozalash kerak. Qizdirish kamerasini tozalash uchun cho‘tkadan foydalaning. Shuningdek, moslama uzoqroq ishlashi uchun ortiqcha namlikni yo‘qoting.
                  </div>
                  <br>
                  <div class="cleaning-items flex text-center mobile:jc-center mobile:fw-wrap">
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-1.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Qadoqdan glo tozalash tayoqchasini oling
                        </div>
                      </div>
                    </div>
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-2.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Yuqori qopqoqni oching
                        </div>
                      </div>
                    </div>
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-3.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Pastki eshikchani oching
                        </div>
                      </div>
                    </div>
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-4.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Ichki kamerani yaxshilab tozalang
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>





export default {
  head() {
    return {
      title: "Электронные сигареты Glo Hyper в Узбекистане купить систему нагревания табака Glo (Гло) в Ташкенте",

      meta: [
        {
          hid: 'description',
          name: "description",
          content: "Официальный сайт продажи систем для нагрева табака Glo в Ташкенте и Узбекистане &#11088; от Бритиш Американ Тобакко. Устройств нагревания табака и стики для Гло (Glo) можно купить в Ташкенте. &#10133; Бесплатный тест драйв"
        },
        // {
        //   name: "keywords",
        //   content: this.page_data.seo.keywords
        // }
      ],
    }
  },
  //layout: 'page',
  components:{
    //Products
  },
  mounted(){
    window.olo = this;
      
      window.swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
      });
      window.swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
      $(swiper2.$el).find(".swiper-slide-active [zoom-i]").elevateZoom()
      swiper2.on('slideChange', function (p) {
        $(".zoomContainer").remove();
        $(p.$el).find(".swiper-slide").eq(p.activeIndex).find("[zoom-i]").elevateZoom({
          // zoomType: "lens",
          // lensShape: "round",
          // lensSize: 200
        });
        console.log($(p.$el));
      });
      
        
        //responsiveTabs
      $('.responsive-tab').responsiveTabs({
        startCollapsed: 'accordion'
      });
        

  },
  data(){
    return {
      current_product: null,
      products: 
      {
        "uz": [
          {
            "id": 1,
            "images": [
              "/img/product/carousel/Polar-SNS-1.webp",
              "/img/product/carousel/Polar-SNS-2.webp",
              "/img/product/carousel/Polar-SNS-3.webp",
              "/img/product/carousel/Polar-SNS-4.webp"
            ],
            "name": "glo HYPER+ Yangi Yil taklifi",
            "image": "/img/products/product-polar.webp",
            "limit": true,
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 2,
            "images": [
              "/img/product/carousel/Summer-Buzova-1.webp",
              "/img/product/carousel/Summer-Buzova-2.webp",
              "/img/product/carousel/Summer-Buzova-3.webp",
              "/img/product/carousel/Summer-Buzova-4.webp"
            ],
            "name": "glo HYPER+ Bliss",
            "image": "/img/products/product-buzova.webp",
            "limit": true,
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 3,
            "images": [
              "/img/product/carousel/Summer-Timati-1.webp",
              "/img/product/carousel/Summer-Timati-2.webp",
              "/img/product/carousel/Summer-Timati-3.webp",
              "/img/product/carousel/Summer-Timati-4.webp"
            ],
            "name": "glo HYPER+ Topaz",
            "image": "/img/products/product-timati.webp",
            "limit": true,
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 4,
            "images": [
              "/img/product/carousel/frosty_gold-1.webp",
              "/img/product/carousel/frosty_gold-2.webp",
              "/img/product/carousel/frosty_gold-3.webp",
              "/img/product/carousel/frosty_gold-4.webp",
              "/img/product/carousel/frosty_gold-5.webp"
            ],
            "name": "glo HYPER+ Oltin",
            "image": "/img/products/product-gold.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 5,
            "images": [
              "/img/product/carousel/Mahogany-Red-1.webp",
              "/img/product/carousel/Mahogany-Red-2.webp",
              "/img/product/carousel/Mahogany-Red-3.webp",
              "/img/product/carousel/Mahogany-Red-4.webp",
              "/img/product/carousel/Mahogany-Red-5.webp"
            ],
            "name": "glo HYPER+ Qora-qizil",
            "image": "/img/products/product-red-wood.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 6,
            "images": [
              "/img/product/carousel/energetic_blue-1.webp",
              "/img/product/carousel/energetic_blue-2.webp",
              "/img/product/carousel/energetic_blue-3.webp",
              "/img/product/carousel/energetic_blue-4.webp",
              "/img/product/carousel/energetic_blue-5.webp"
            ],
            "name": "glo HYPER+ Moviy",
            "image": "/img/products/product-blue.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 7,
            "images": [
              "/img/product/carousel/pearl_white-1.webp",
              "/img/product/carousel/pearl_white-2.webp",
              "/img/product/carousel/pearl_white-3.webp",
              "/img/product/carousel/pearl_white-4.webp",
              "/img/product/carousel/pearl_white-5.webp"
            ],
            "name": "glo HYPER+ Oq",
            "image": "/img/products/product-white.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 8,
            "images": [
              "/img/product/carousel/ebony_black-1.webp",
              "/img/product/carousel/ebony_black-2.webp",
              "/img/product/carousel/ebony_black-3.webp",
              "/img/product/carousel/ebony_black-4.webp",
              "/img/product/carousel/ebony_black-5.webp"
            ],
            "name": "glo HYPER+ Qora",
            "image": "/img/products/product-black.webp",
            "price_manager": 150000,
            "price": 200000
          }
        ],
        "ru": [
          {
            "id": 1,
            "images": [
              "/img/product/carousel/Polar-SNS-1.webp",
              "/img/product/carousel/Polar-SNS-2.webp",
              "/img/product/carousel/Polar-SNS-3.webp",
              "/img/product/carousel/Polar-SNS-4.webp"
            ],
            "name": "glo HYPER+ Новогоднее предложение",
            "image": "/img/products/product-polar.webp",
            "limit": true,
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 2,
            "images": [
              "/img/product/carousel/Summer-Buzova-1.webp",
              "/img/product/carousel/Summer-Buzova-2.webp",
              "/img/product/carousel/Summer-Buzova-3.webp",
              "/img/product/carousel/Summer-Buzova-4.webp"
            ],
            "name": "glo HYPER+ Блисс",
            "image": "/img/products/product-buzova.webp",
            "limit": true,
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 3,
            "images": [
              "/img/product/carousel/Summer-Timati-1.webp",
              "/img/product/carousel/Summer-Timati-2.webp",
              "/img/product/carousel/Summer-Timati-3.webp",
              "/img/product/carousel/Summer-Timati-4.webp"
            ],
            "name": "glo HYPER+ Топаз",
            "image": "/img/products/product-timati.webp",
            "limit": true,
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 4,
            "images": [
              "/img/product/carousel/frosty_gold-1.webp",
              "/img/product/carousel/frosty_gold-2.webp",
              "/img/product/carousel/frosty_gold-3.webp",
              "/img/product/carousel/frosty_gold-4.webp",
              "/img/product/carousel/frosty_gold-5.webp"
            ],
            "name": "glo HYPER+ Золотой",
            "image": "/img/products/product-gold.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 5,
            "images": [
              "/img/product/carousel/Mahogany-Red-1.webp",
              "/img/product/carousel/Mahogany-Red-2.webp",
              "/img/product/carousel/Mahogany-Red-3.webp",
              "/img/product/carousel/Mahogany-Red-4.webp",
              "/img/product/carousel/Mahogany-Red-5.webp"
            ],
            "name": "glo HYPER+ Чёрно-красный",
            "image": "/img/products/product-red-wood.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 6,
            "images": [
              "/img/product/carousel/energetic_blue-1.webp",
              "/img/product/carousel/energetic_blue-2.webp",
              "/img/product/carousel/energetic_blue-3.webp",
              "/img/product/carousel/energetic_blue-4.webp",
              "/img/product/carousel/energetic_blue-5.webp"
            ],
            "name": "glo HYPER+ Синий",
            "image": "/img/products/product-blue.webp",
            "price": 200000
          },
          {
            "id": 7,
            "images": [
              "/img/product/carousel/pearl_white-1.webp",
              "/img/product/carousel/pearl_white-2.webp",
              "/img/product/carousel/pearl_white-3.webp",
              "/img/product/carousel/pearl_white-4.webp",
              "/img/product/carousel/pearl_white-5.webp"
            ],
            "name": "glo HYPER+ Белый",
            "image": "/img/products/product-white.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 8,
            "images": [
              "/img/product/carousel/ebony_black-1.webp",
              "/img/product/carousel/ebony_black-2.webp",
              "/img/product/carousel/ebony_black-3.webp",
              "/img/product/carousel/ebony_black-4.webp",
              "/img/product/carousel/ebony_black-5.webp"
            ],
            "name": "glo HYPER+ Чёрный",
            "image": "/img/products/product-black.webp",
            "price_manager": 150000,
            "price": 200000
          }
        ]
      },


    }
  },
  created(){
    var current_id = this.$route.params.product_id
    console.log(this.$i18n.locale)
    this.products[this.$i18n.locale].forEach(item => {
      if(item.id == current_id)
        this.current_product = item; 
    });
  },
  async asyncData(context){
    try{
      //console.log(context.route.params.product_id, this);

      
       //var posts = await context.$axios.$post('https://api.nuxtjs.dev/posts')
       //var posts = await context.$axios.$get('http://localhost:8899/json/products.json', {data:2})
       //var posts = await context.store.dispatch("app/fetchProducts");
       //console.log(context);
      return {
        
      }
    }catch(e){
      console.log(e);
      context.error(e);
    }
  },
 
}
</script>

<style lang="scss">


  .product-item{
    a{
      font-size: 16px;
    }
  }
  .product-content{
    overflow: hidden;
    position: relative;
    a{
      color: inherit;
    }
    .cap-content{
      h1{
        font-weight: 700;
        margin-bottom: 0;
        line-height: 100%;
      }
      .color-gray{
        font-size: 19px;
      }
    }
    .swiper {
      width: 100%;
      height: 100%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      img{

        pointer-events: none;
      }
      &.swiper-slide-active{
        img{

          pointer-events: auto;
        }
      }
    }
    .mySwiper2 {
      height: 80%;
      width: 100%;
    }
    .mySwiper {
      width: 80%; 
      height: 15%;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .mySwiper .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    .mySwiper .swiper-slide-thumb-active {
      opacity: 1;
    }

  }
  .cleaning-items{
    font-size: 12px;
    .item{
      //flex-shrink: 0;
      width: 240px;
    }
    .img-content{
      img{
        width: 72px;
      }
    }
  }
  @keyframes dash{
    0%{
      stroke-dashoffset: 0px;
    }
    100%{
      stroke-dashoffset: 252px;
    }
  }

  .format-items{
    font-size: 14px;
    .item{
      .format-circle{
        fill: #e4e4e4;
        stroke: #e4e4e4;
        stroke-width: 0px;
        transform: scale(1);
        transform-origin: center;
        transition: 0.5s ease;
        stroke-linecap: round;
        stroke-dasharray: 63px;
        animation: dash 7s linear 0s infinite;
      }
      svg{
        path{
          fill: #232525;
          transform-origin: center;
          transition: 0.5s ease;
        }
        overflow: visible;
      }
      &:hover{
        svg{
          path{
            stroke: #69c9fa;
            stroke-width: 0.5px;
            fill: white;
          }
          .format-circle{
            fill: #1e5aa3;
            stroke: #69c9fa;
            stroke-width: 5px;
            //transform: scale(0.5);
          }
        }
      }
      @media (min-width: 992px){
        max-width: 50%;
      }
      @keyframes pathscale{
        0%, 100%{
          stroke-width: 0px;
        }
        50%{
          stroke-width: 1.8px;
        }
      }
      @keyframes rotated{
        0%, 100%{
          transform: rotate(0);
        }
        50%{
          transform: rotate(360deg);
        }
        // 0%{transform: rotate(0) scale(1);}
        // 10%{transform: rotate(36deg) scale(1.1);}
        // 20%{transform: rotate(72deg) scale(1);}
        // 30%{transform: rotate(108deg) scale(1.1);}
        // 40%{transform: rotate(144deg) scale(1);}
        // 50%{transform: rotate(216deg) scale(1.1);}
        // 60%{transform: rotate(252deg) scale(1);}
        // 70%{transform: rotate(288deg) scale(1.1);}
        // 80%{transform: rotate(324deg) scale(1);}
        // 90%{transform: rotate(360deg) scale(1.1);}
      }
      &.item-boost{
        &:hover{
          svg{
            
          }
          svg path{
            stroke-width: 0px;
            animation: 
            rotated 90s linear 0s infinite,
            pathscale 3s linear 0s infinite;
          }
        }
      }
      &.item-demi{
        svg path{
          transform: scale(1);
        }
        &:hover{
          path{
            stroke: white;
            stroke-width: 2px;
            transition:transform 1s cubic-bezier(0.22, -1, 0, 2.05);
          }
          [d="M24.4437 31.5148V24.4437H31.5148"],[d="M30.1007 30.1006L24.4438 24.4437"]{
            transform: scale(0.95) translate(-3px, -3px);
            transition-delay: 0.0s;
          }
          [d="M49.8998 30.1006L55.5566 24.4437"],[d="M48.4855 24.4437L55.5565 24.4437L55.5565 31.5148"]{
            transform: scale(0.95) translate(3px, -3px);
            transition-delay: 0.10s;
          }
          [d="M30.1002 49.8994L24.4434 55.5563"],[d="M31.5145 55.5563L24.4435 55.5563L24.4435 48.4852"]{
            transform: scale(0.95) translate(-3px, 3px);
            transition-delay: 0.20s;
          }
          [d="M49.8993 49.8994L55.5562 55.5563"],[d="M55.5563 48.4852L55.5563 55.5563L48.4852 55.5563"]{
            transform: scale(0.95) translate(3px, 3px);
            transition-delay: 0.30s;
          }
        }
      }
      &.item-light{
        &:hover{
          path{
            stroke-width: 2.5px;
            animation: dash 7s linear 0s infinite;
            stroke-dasharray: 1.4px;
          }
        }
      }
    }
    h4{
      font-weight: 600;
      font-size: 18px;
    }
  }
  .nav-def{
    ul{
      display: flex;
      border-bottom: 1px solid #f2f2f2;
      padding-left: 0;
    }
    li{
      font-size: 16px;
      list-style: none;
      position: relative;
      &:not(:nth-child(1)){
        margin-left: 40px;
      }
      &:before{
        opacity: 0;
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background-color: black;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    a{
      display: block;
      position: relative;
      padding: 18px 0;
      text-decoration: none;
      font-size: 14px;
      font-weight: 400;
      color: black;
      &:before{
        display: block;
        content: "";
        position: absolute;
        right: 30px;
        top: calc(50% - 4px);
        border-top: 1px solid currentColor;
        border-right: 1px solid currentColor;
        width: 8px;
        height: 8px;
        transform: rotate(45deg);
        @media (min-width: 992px){
          display: none;
        }
      }
    }
    .r-tabs-state-active{
      &:before{
        opacity: 1;
      }
      a{
        &:before{
          transform: rotate(135deg);
        }
      }
    }
    @media (max-width: 991px){
      .r-tabs-state-active{
        background-color: #f7f7f7;
      }
      .wrapper{
        padding-left: 20px;
        padding-right: 20px;
      }
      .r-tabs-accordion-title{
        a{
          //background-color: #f2f2f2;
          border-bottom: 1px solid #f2f2f2;
          padding-left: 20px;
          padding-right: 20px;
        }
      }
    }
  }

  /* responsiveTabs */
  .r-tabs .r-tabs-nav {
      margin: 0;
      padding: 0;
  }

  .r-tabs .r-tabs-tab {
      //display: inline-block;
      //margin: 0;
      //list-style: none;
  }

  .r-tabs .r-tabs-panel {
      padding: 15px 0;
      display: none;
  }

  .r-tabs .r-tabs-accordion-title {
      display: none;
  }

  .r-tabs .r-tabs-panel.r-tabs-state-active {
      display: block;
  }

  /* Accordion responsive breakpoint */
  @media only screen and (max-width: 768px) {
      .r-tabs .r-tabs-nav {
          display: none;
      }

      .r-tabs .r-tabs-accordion-title {
          display: block;
      }
  }

  // ---ELEVATEZOOM---
  /*
  .zoomWindowContainer{
    //width: 600px;
    left: -180%;
    top: -45%;
    position: relative;
  }
  */
  .zoomContainer{
   // z-index: 1;
   @media (max-width: 991px){
     display: none;
   }
  }
  .zoomWindowContainer{
    //width: 500px;
    // *{
    //   border: 5px solid rgba(black, 0.5) !important;
    //   border-radius: 3px;
    // }
    left: 15px;
    position: absolute;
  }


.breadcrumb{
	ul{
		display: flex;
    padding-left: 0;
		li{
      list-style: none;
      position: relative;
      margin-left: 40px;
      &:before{
        display: block;
        content: "";
        position: absolute;
        left: -25px;
        top: 8px;
        border-top: 1px solid currentColor;
        border-right: 1px solid currentColor;
        width: 8px;
        height: 8px;
        transform: rotate(45deg);
      }
      &:nth-child(1){
        margin-left: 0;
        &:before{
          display: none;
        }
      }
			a{
				color: inherit; 
        text-decoration: none;
			}
		}
	}
}

</style>