import{r,o as l,c as d,a as e,b as o,w as s,F as u,e as n,d as t}from"./app.23beb641.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const c={},p=n('<h2 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h2><p>While iOS firmware version 15.0.2 is unsigned, it&#39;s still possible to update to it from a lower firmware version and wait for a jailbreak. However, this method will <strong>expire on January 23rd, 2022</strong>.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You need a pre-existing jailbreak installed to use this method.</p></div><h2 id="preparing" tabindex="-1"><a class="header-anchor" href="#preparing" aria-hidden="true">#</a> Preparing</h2>',4),_=n("<li>Plug your iDevice into your computer and make a backup through iTunes or Finder</li><li>Launch your current jailbreak</li><li>Open your preferred package manager and add the following repo: <code>https://myxxdev.github.io/</code></li><li>Search and install the <code>MyBloXX</code> package <ul><li>There are multiple version; pick the one corresponding to your current iOS version</li></ul></li><li>Tap <code>Restart Springboard</code></li><li>Your device should now be in supervision mode <ul><li>If it&#39;s not, go into MyBloXX settings and enable it manually by tapping &quot;Enable Supervision Spoofing&quot;</li></ul></li>",6),g=t("Once you're back into iOS, navigate to this webpage and click this link to install the "),f={href:"https://cdn.discordapp.com/attachments/688122358107603013/829323445200355359/90_Day_Delay.mobileconfig",target:"_blank",rel:"noopener noreferrer"},b=t("update profile"),m=e("li",null,"After installing the profile, 15.0.2 should show up in the Settings app as an update",-1),k=e("li",null,"Restart your device",-1),v=t("Open your current jailbreak and restore rootfs "),w=t("If you need a detailed guide on how to restore rootfs, follow "),y=t("Restoring Rootfs"),x=t(" and select the jailbreak which you currently use."),O=n('<h2 id="updating-to-15-0-2" tabindex="-1"><a class="header-anchor" href="#updating-to-15-0-2" aria-hidden="true">#</a> Updating to 15.0.2</h2><ol><li>Plug your device into power and connect to the Internet with Wi-Fi</li><li>Open the Settings application</li><li>Tap <code>General</code> -&gt; <code>Software Update</code><ul><li>Ensure that the version you are updating to is 15.0.2</li></ul></li><li>Download and install the update</li><li>Once updated, remove the 15.0.2 update certificate through Settings</li></ol><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>',3),S=t("If you're having issues with updating, install "),j={href:"https://repo.cadoth.net/",target:"_blank",rel:"noopener noreferrer"},R=t("OTAEnabler"),T=t(" and reboot. If you're still having issues continue reading below. If it worked, wait until a jailbreak comes to this iOS firmware version."),I=e("h3",{id:"ios-is-up-to-date",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ios-is-up-to-date","aria-hidden":"true"},"#"),t(' "iOS is up to date"')],-1),D=e("ol",null,[e("li",null,"Remove any beta profiles installed"),e("li",null,"Install the OTADisabler tweak and then uninstall it"),e("li",null,"Restart your device")],-1),q=e("ul",null,[e("li",null,"You can also use ldrestart or a userspace reboot")],-1),B=e("h3",{id:"unable-to-check-for-updates",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#unable-to-check-for-updates","aria-hidden":"true"},"#"),t(' "Unable to check for updates"')],-1),F=e("li",null,"Restore rootFS through your jailbreak",-1),A=t("Install and open the "),C=t("unc0ver"),E=t(" application"),N=e("li",null,'Turn off "Disable updates"',-1),P=e("li",null,"Re-jailbreak using unc0ver",-1),V=e("h3",{id:"it-just-freezes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#it-just-freezes","aria-hidden":"true"},"#"),t(" It just freezes")],-1),X=e("p",null,"Re-enable the OTA daemon using the iCleaner tweak",-1),z=e("hr",null,null,-1),L=t("Credits to "),U={href:"https://github.com/dhinakg/",target:"_blank",rel:"noopener noreferrer"},Y=t("dhinakg"),M=t(" for discovering this method.");function W(G,H){const i=r("OutboundLink"),a=r("router-link");return l(),d(u,null,[p,e("ol",null,[_,e("li",null,[g,e("a",f,[b,o(i)])]),m,k,e("li",null,[v,e("ul",null,[e("li",null,[w,o(a,{to:"/restoring-rootfs"},{default:s(()=>[y]),_:1}),x])])])]),O,e("p",null,[S,e("a",j,[R,o(i)]),T]),I,D,q,B,e("ol",null,[F,e("li",null,[A,o(a,{to:"/installing-unc0ver"},{default:s(()=>[C]),_:1}),E]),N,P]),V,X,z,e("p",null,[L,e("a",U,[Y,o(i)]),M])],64)}var Q=h(c,[["render",W]]);export{Q as default};
