<script setup>
function FunctionLine() {
  let movingLine = document.querySelector(".line");
  let valueScroll = window.pageYOffset;
  movingLine.style.width = valueScroll / 3 + "%";
}
function FunctionLine2() {
  let movingLine = document.querySelector(".line2");
  let valueScroll = window.pageYOffset;
  movingLine.style.width = valueScroll / 3 + "%";
}
function FunctionLine2() {
  let movingLine = document.querySelector(".line2");
  let valueScroll = window.pageYOffset;
  movingLine.style.width = valueScroll / 3 + "%";
}

window.addEventListener("scroll", FunctionLine);
window.addEventListener("scroll", FunctionLine2);
</script>

<template>
  <div class="h-[1px] bg-black -z-50 line fixed rotate-45 origin-[0]"></div>
  <div
    class="h-[1px] bg-black -z-50 line2 fixed rotate-[145deg] origin-[0] inset-y-0 inset-x-full"
  ></div>
  <div
    class="h-[1px] bg-black -z-50 line3 fixed rotate-[145deg] origin-[0] inset-y-0 inset-x-full"
  ></div>

  <div class="p-4">
    <p class="max-w-4xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis
      leo ut massa laoreet, a interdum velit cursus. Vestibulum malesuada dui
      tincidunt turpis mollis, sit amet varius metus dignissim. Mauris congue,
      augue at malesuada lacinia, ipsum lorem gravida elit, ac convallis lacus
      sem at ex. Phasellus dictum nisl ut risus aliquam placerat sed a purus.
      Aliquam vehicula purus ullamcorper, facilisis est non, viverra justo.
      Curabitur molestie dui lorem, vel tristique ex scelerisque eu. Nunc
      suscipit quis urna vel aliquet. Maecenas eros mauris, viverra sit amet
      dolor id, ultricies tempor mauris. Pellentesque et commodo dui. Aliquam
      erat volutpat. Donec dignissim magna a neque consequat bibendum. In hac
      habitasse platea dictumst. Vivamus sagittis feugiat nulla, vitae fringilla
      nunc venenatis in. Phasellus auctor elit ac tortor tempor, et cursus dui
      pharetra. Mauris ultrices justo id nulla facilisis, finibus fermentum enim
      malesuada. Quisque nec consectetur ante. Sed odio elit, efficitur sit amet
      gravida non, fermentum sit amet libero. Curabitur luctus pretium cursus.
      Aenean hendrerit ornare ipsum, sit amet semper purus pellentesque sit
      amet. Nam hendrerit malesuada vulputate. Nam gravida mi risus, sit amet
      molestie risus sollicitudin a. Aliquam laoreet ac leo ut porttitor. Sed
      condimentum, magna eget placerat tristique, lorem metus maximus enim, et
      hendrerit nunc lacus vel arcu. Nullam sed mi bibendum, ultricies odio eu,
      viverra mi. Ut id lacus id purus imperdiet pharetra sit amet ac urna. Nunc
      laoreet quam nec rhoncus tincidunt. Nam commodo dui ante, et convallis
      erat tempor eu. Etiam ac ligula felis. Ut tristique risus non tempus
      iaculis. Morbi faucibus ipsum a risus ullamcorper pretium. Suspendisse
      potenti. Nam fringilla metus consequat tellus faucibus, nec mollis dui
      lobortis. Sed cursus luctus venenatis. Phasellus a aliquam mauris,
      suscipit posuere lectus. Nullam lacus metus, malesuada eget diam ac,
      sollicitudin venenatis magna. Aenean a velit nec elit gravida faucibus in
      sit amet tortor. Proin commodo velit eget ornare ornare. Pellentesque
      accumsan ultricies hendrerit. Suspendisse lobortis velit ac fermentum
      iaculis. Vivamus ornare quam at rhoncus sagittis. Vestibulum eu
      sollicitudin leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      In interdum pharetra ornare. Nam consectetur quam non dolor aliquam
      molestie ac vel ipsum. Maecenas sagittis rhoncus turpis quis pellentesque.
      Integer a tellus elit. Nam sed porta velit. Sed diam enim, lobortis vel
      nibh vitae, semper placerat est. Proin imperdiet erat odio, nec sagittis
      nisl porttitor commodo.
    </p>
    <p class="max-w-4xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis
      leo ut massa laoreet, a interdum velit cursus. Vestibulum malesuada dui
      tincidunt turpis mollis, sit amet varius metus dignissim. Mauris congue,
      augue at malesuada lacinia, ipsum lorem gravida elit, ac convallis lacus
      sem at ex. Phasellus dictum nisl ut risus aliquam placerat sed a purus.
      Aliquam vehicula purus ullamcorper, facilisis est non, viverra justo.
      Curabitur molestie dui lorem, vel tristique ex scelerisque eu. Nunc
      suscipit quis urna vel aliquet. Maecenas eros mauris, viverra sit amet
      dolor id, ultricies tempor mauris. Pellentesque et commodo dui. Aliquam
      erat volutpat. Donec dignissim magna a neque consequat bibendum. In hac
      habitasse platea dictumst. Vivamus sagittis feugiat nulla, vitae fringilla
      nunc venenatis in. Phasellus auctor elit ac tortor tempor, et cursus dui
      pharetra. Mauris ultrices justo id nulla facilisis, finibus fermentum enim
      malesuada. Quisque nec consectetur ante. Sed odio elit, efficitur sit amet
      gravida non, fermentum sit amet libero. Curabitur luctus pretium cursus.
      Aenean hendrerit ornare ipsum, sit amet semper purus pellentesque sit
      amet. Nam hendrerit malesuada vulputate. Nam gravida mi risus, sit amet
      molestie risus sollicitudin a. Aliquam laoreet ac leo ut porttitor. Sed
      condimentum, magna eget placerat tristique, lorem metus maximus enim, et
      hendrerit nunc lacus vel arcu. Nullam sed mi bibendum, ultricies odio eu,
      viverra mi. Ut id lacus id purus imperdiet pharetra sit amet ac urna. Nunc
      laoreet quam nec rhoncus tincidunt. Nam commodo dui ante, et convallis
      erat tempor eu. Etiam ac ligula felis. Ut tristique risus non tempus
      iaculis. Morbi faucibus ipsum a risus ullamcorper pretium. Suspendisse
      potenti. Nam fringilla metus consequat tellus faucibus, nec mollis dui
      lobortis. Sed cursus luctus venenatis. Phasellus a aliquam mauris,
      suscipit posuere lectus. Nullam lacus metus, malesuada eget diam ac,
      sollicitudin venenatis magna. Aenean a velit nec elit gravida faucibus in
      sit amet tortor. Proin commodo velit eget ornare ornare. Pellentesque
      accumsan ultricies hendrerit. Suspendisse lobortis velit ac fermentum
      iaculis. Vivamus ornare quam at rhoncus sagittis. Vestibulum eu
      sollicitudin leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      In interdum pharetra ornare. Nam consectetur quam non dolor aliquam
      molestie ac vel ipsum. Maecenas sagittis rhoncus turpis quis pellentesque.
      Integer a tellus elit. Nam sed porta velit. Sed diam enim, lobortis vel
      nibh vitae, semper placerat est. Proin imperdiet erat odio, nec sagittis
      nisl porttitor commodo.
    </p>
    <p class="max-w-4xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis
      leo ut massa laoreet, a interdum velit cursus. Vestibulum malesuada dui
      tincidunt turpis mollis, sit amet varius metus dignissim. Mauris congue,
      augue at malesuada lacinia, ipsum lorem gravida elit, ac convallis lacus
      sem at ex. Phasellus dictum nisl ut risus aliquam placerat sed a purus.
      Aliquam vehicula purus ullamcorper, facilisis est non, viverra justo.
      Curabitur molestie dui lorem, vel tristique ex scelerisque eu. Nunc
      suscipit quis urna vel aliquet. Maecenas eros mauris, viverra sit amet
      dolor id, ultricies tempor mauris. Pellentesque et commodo dui. Aliquam
      erat volutpat. Donec dignissim magna a neque consequat bibendum. In hac
      habitasse platea dictumst. Vivamus sagittis feugiat nulla, vitae fringilla
      nunc venenatis in. Phasellus auctor elit ac tortor tempor, et cursus dui
      pharetra. Mauris ultrices justo id nulla facilisis, finibus fermentum enim
      malesuada. Quisque nec consectetur ante. Sed odio elit, efficitur sit amet
      gravida non, fermentum sit amet libero. Curabitur luctus pretium cursus.
      Aenean hendrerit ornare ipsum, sit amet semper purus pellentesque sit
      amet. Nam hendrerit malesuada vulputate. Nam gravida mi risus, sit amet
      molestie risus sollicitudin a. Aliquam laoreet ac leo ut porttitor. Sed
      condimentum, magna eget placerat tristique, lorem metus maximus enim, et
      hendrerit nunc lacus vel arcu. Nullam sed mi bibendum, ultricies odio eu,
      viverra mi. Ut id lacus id purus imperdiet pharetra sit amet ac urna. Nunc
      laoreet quam nec rhoncus tincidunt. Nam commodo dui ante, et convallis
      erat tempor eu. Etiam ac ligula felis. Ut tristique risus non tempus
      iaculis. Morbi faucibus ipsum a risus ullamcorper pretium. Suspendisse
      potenti. Nam fringilla metus consequat tellus faucibus, nec mollis dui
      lobortis. Sed cursus luctus venenatis. Phasellus a aliquam mauris,
      suscipit posuere lectus. Nullam lacus metus, malesuada eget diam ac,
      sollicitudin venenatis magna. Aenean a velit nec elit gravida faucibus in
      sit amet tortor. Proin commodo velit eget ornare ornare. Pellentesque
      accumsan ultricies hendrerit. Suspendisse lobortis velit ac fermentum
      iaculis. Vivamus ornare quam at rhoncus sagittis. Vestibulum eu
      sollicitudin leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      In interdum pharetra ornare. Nam consectetur quam non dolor aliquam
      molestie ac vel ipsum. Maecenas sagittis rhoncus turpis quis pellentesque.
      Integer a tellus elit. Nam sed porta velit. Sed diam enim, lobortis vel
      nibh vitae, semper placerat est. Proin imperdiet erat odio, nec sagittis
      nisl porttitor commodo.
    </p>
  </div>
</template>

<style scoped></style>
