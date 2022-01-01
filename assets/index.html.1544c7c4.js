import{r as s,o as l,c as d,a as e,b as o,w as a,F as h,e as r,d as t}from"./app.23beb641.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const c={},p=r('<h2 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h2><p>While iOS firmware version 12.5.4 is unsigned, it&#39;s still possible to update to it from a lower firmware version and use Chimera. However, this method will <strong>expire on January 9th, 2021</strong>.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This method only works if you are on a 64-bit device that is not supported by iOS 13.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You need a pre-existing jailbreak installed to use this method.</p></div><h2 id="preparing" tabindex="-1"><a class="header-anchor" href="#preparing" aria-hidden="true">#</a> Preparing</h2>',5),_=r("<li>Plug your iDevice into your computer and make a backup through iTunes or Finder</li><li>Launch your current jailbreak</li><li>Open your preferred package manager and add the following repo: <code>https://myxxdev.github.io/</code></li><li>Search and install the <code>MyBloXX</code> package <ul><li>There are multiple version; pick the one corresponding to your current iOS version</li></ul></li><li>Tap <code>Restart Springboard</code></li><li>Your device should now be in supervision mode <ul><li>If it&#39;s not, go into MyBloXX settings and enable it manually by tapping &quot;Enable Supervision Spoofing&quot;</li></ul></li>",6),g=t("Once you're back into iOS, navigate to this webpage and click this link to install the "),f={href:"https://cdn.discordapp.com/attachments/688122358107603013/829323445200355359/90_Day_Delay.mobileconfig",target:"_blank",rel:"noopener noreferrer"},b=t("update profile"),m=e("li",null,"After installing the profile, 12.5.4 should show up in the Settings app as an update",-1),k=e("li",null,"Restart your device",-1),v=t("Open your current jailbreak and restore rootfs "),y=t("If you need a detailed guide on how to restore rootfs, follow "),w=t("Restoring Rootfs"),x=t(" and select the jailbreak which you currently use."),O=r('<h2 id="updating-to-12-5-4" tabindex="-1"><a class="header-anchor" href="#updating-to-12-5-4" aria-hidden="true">#</a> Updating to 12.5.4</h2><ol><li>Plug your device into power and connect to the Internet with Wi-Fi</li><li>Open the Settings application</li><li>Tap <code>General</code> -&gt; <code>Software Update</code><ul><li>Ensure that the version you are updating to is 12.5.4</li></ul></li><li>Download and install the update</li><li>Once updated, remove the 12.5.4 update certificate through Settings</li></ol><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>',3),S=t("If you're having issues with updating, install "),R={href:"https://repo.cadoth.net/",target:"_blank",rel:"noopener noreferrer"},T=t("OTAEnabler"),j=t(" and reboot. If you're still having issues continue reading below. If it worked, move on to "),I=t("Chimera"),D=t("."),C=e("h3",{id:"ios-is-up-to-date",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ios-is-up-to-date","aria-hidden":"true"},"#"),t(' "iOS is up to date"')],-1),q=e("ol",null,[e("li",null,"Remove any beta profiles installed"),e("li",null,"Install the OTADisabler tweak and then uninstall it"),e("li",null,"Restart your device")],-1),A=e("ul",null,[e("li",null,"You can also use ldrestart or a userspace reboot")],-1),B=e("h3",{id:"unable-to-check-for-updates",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#unable-to-check-for-updates","aria-hidden":"true"},"#"),t(' "Unable to check for updates"')],-1),E=e("li",null,"Restore rootFS through your jailbreak",-1),F=t("Install and open the "),N=t("unc0ver"),P=t(" application"),V=e("li",null,'Turn off "Disable updates"',-1),X=e("li",null,"Re-jailbreak using unc0ver",-1),z=e("h3",{id:"it-just-freezes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#it-just-freezes","aria-hidden":"true"},"#"),t(" It just freezes")],-1),L=e("p",null,"Re-enable the OTA daemon using the iCleaner tweak",-1),U=e("hr",null,null,-1),Y=t("Credits to "),G={href:"https://github.com/dhinakg/",target:"_blank",rel:"noopener noreferrer"},M=t("dhinakg"),W=t(" for discovering this method.");function H(J,K){const i=s("OutboundLink"),n=s("router-link");return l(),d(h,null,[p,e("ol",null,[_,e("li",null,[g,e("a",f,[b,o(i)])]),m,k,e("li",null,[v,e("ul",null,[e("li",null,[y,o(n,{to:"/restoring-rootfs"},{default:a(()=>[w]),_:1}),x])])])]),O,e("p",null,[S,e("a",R,[T,o(i)]),j,o(n,{to:"/installing-chimera"},{default:a(()=>[I]),_:1}),D]),C,q,A,B,e("ol",null,[E,e("li",null,[F,o(n,{to:"/installing-unc0ver"},{default:a(()=>[N]),_:1}),P]),V,X]),z,L,U,e("p",null,[Y,e("a",G,[M,o(i)]),W])],64)}var $=u(c,[["render",H]]);export{$ as default};
