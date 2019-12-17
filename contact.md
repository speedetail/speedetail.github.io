---
layout: page
title: 연락하기
permalink: /contact/
sitemap: yes
excerpt: Speedetail에 대한 다양한 의견을 주세요.
tags: [contact]
---

<h2>SPEEDETAIL 연락처</h2>
<h3>이메일</h3>
<p>
스피디테일<br/>
speedetail@naver.com
</p>
<h3>메시지 보내기</h3>

<form name="sentMessage" id="contactForm" novalidate action="https://formspree.io/speedetail2@gmail.com" method="post">
    <input type="hidden" name="_subject" value="블로그에서 새로운 연락이 왔습니다." />
    <input type="text" name="_gotcha" style="display:none" />
    <div class="control-group">
        <div class="form-group floating-label-form-group controls">
        <label></label>
        <input type="text" class="form-control" placeholder="" id="name" name="name" required data-validation-required-message="">
        <div class="help-block text-danger"></div>
        </div>
        <div class="form-group floating-label-form-group controls">
        <label></label>
        <input type="email" class="form-control" placeholder="" id="email" name="email" required data-validation-validemail-message="" data-validation-required-message="">
        <div class="help-block text-danger"></div>
        </div>
        <div class="form-group floating-label-form-group controls">
        <label></label>
        <textarea rows="5" class="form-control" placeholder="" id="message" name="message" required data-validation-required-message=""></textarea>
        <div class="help-block text-danger"></div>
        </div>
    </div>
    <br>
    <div id="success"></div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
    </div>
</form>

<!--
<form action="" method="post">
  <p>개발자에게 한마디:
    <br>
    <textarea name="message" cols="40" rows="7" style="width:100%;">
    </textarea>
  </p>
  
  <p>
  <br>
  이름:
  <br>
    <input type="text" name="username" size="25" maxlength="100" style="width:40%;">
  </p>
  
  <p>
  <br>
  성별:
  <br>
    <select>
      <option value="man" selected>남자</option>
      <option value="woman">여자</option>
    </select>
  </p>
  
  <p>
  <br>
  이메일(선택사항):
  <br>
    <input class="sledit" type="text" name="email" size="25" maxlength="100" style="width:40%;">
  </p>
  
  <p>
  <br>
      <input type="checkbox" name="agreement" value="Yes" checked> 스피디테일 정보 수집 및 이메일 수신에 동의합니다.<br>
  <br>
  </p>
  
  <p>
  <br>
    <input class="slbutton" type="submit" value="보내기" style="width:80px;">
  </p>
</form>
-->

<h3>고맙습니다.</h3>
<p>- SPEEDETAIL TEAM 올림</p>
