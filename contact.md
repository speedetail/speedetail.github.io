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

<form name="sentMessage" id="contactForm" novalidate action="https://simple-form.com/speedetail2@gmail.com" method="post">
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
        <select name="sex">
	<option value="M">Male</option>
	<option value="F">Female</option>
        </select>
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

<h3>고맙습니다.</h3>
<p>- SPEEDETAIL TEAM 올림</p>
