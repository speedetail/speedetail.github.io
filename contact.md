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
speedetail2@gmail.com
</p>
<h3>메시지 보내기</h3>

<form name="sentMessage" id="contactForm" novalidate action="https://simple-form.com/speedetail2@gmail.com" method="post">
    <input type="hidden" name="_subject" value="www.speedetail.com에서 새로운 연락이 왔습니다." />
    <input type="hidden" name="redirectURL" value="http://www.speedetail.com/contact/success" />
    <div class="control-group">
        <div class="form-group floating-label-form-group controls">
        <label>이름 : </label>
        <input type="text" class="form-control" placeholder="" id="name" name="Name" required data-validation-required-message="">
        <div class="help-block text-danger"></div>
        </div>
        <div class="form-group floating-label-form-group controls">
        <label>이메일 : </label>
        <input type="email" class="form-control" placeholder="" id="Email" name="email" required data-validation-validemail-message="" data-validation-required-message="">
        <div class="help-block text-danger"></div>
        </div>

        <select name="Sex">
	<option value="M">남자</option>
	<option value="F">여자</option>
        </select>
        
        <div class="form-group floating-label-form-group controls">
        <label>메시지 : </label>
        <textarea rows="5" class="form-control" placeholder="" id="message" name="Message" required data-validation-required-message=""></textarea>
        <div class="help-block text-danger"></div>
        </div>
        <a href="https://www.speedetail.com/privacy_policy">SpeeDetail 개인정보처리방침</a> 동의 및 업데이트 소식을 제공받는 것에 동의합니다.<input type="checkbox" name="Agreement"/>

    </div>
    <br>
    <div class="form-group">
        <button type="submit" class="btn btn-primary" id="sendMessageButton">보내기</button>
    </div>
</form>

<h3>고맙습니다.</h3>
<p>- SPEEDETAIL TEAM 올림</p>
