module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},58165,e=>{"use strict";var t=e.i(47909),r=e.i(74017),o=e.i(96250),n=e.i(59756),a=e.i(61916),s=e.i(74677),i=e.i(69741),l=e.i(16795),d=e.i(87718),p=e.i(95169),c=e.i(47587),u=e.i(66012),x=e.i(70101),g=e.i(26937),h=e.i(10372),f=e.i(93695);e.i(52474);var b=e.i(220),m=e.i(89171);async function y(e){try{let t=process.env.RESEND_API_KEY;if(!t)return m.NextResponse.json({error:"Email service is not configured."},{status:500});let{fullName:r,phone:o,venue:n,eventDate:a,startTime:s,duration:i,eventType:l,guestCount:d,productionServices:p,equipmentServices:c,selectedPackages:u}=await e.json();if(!r||!o)return m.NextResponse.json({error:"Name and phone are required."},{status:400});let x=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({from:"GJ Decoration <onboarding@resend.dev>",to:"gunasekaran.code@gmail.com",subject:`New Booking Request – ${r} | ${l||"Event"}`,html:`
                <div style="font-family: sans-serif; max-width: 620px; margin: auto; padding: 32px; background: #f8e7f6; border-radius: 16px;">
                    <h2 style="color: #4b164c; margin-bottom: 4px;">New Booking Request</h2>
                    <p style="color: #bc5eff; font-size: 12px; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 0;">GJ Decoration & Event Management</p>

                    <hr style="border: none; border-top: 1px solid #4b164c22; margin: 20px 0;" />

                    <!-- Contact Details -->
                    <h3 style="color: #4b164c; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">Contact Details</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase; width: 160px;">Name</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${r}</td>
                        </tr>
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Phone</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${o}</td>
                        </tr>
                        ${n?`
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Venue</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${n}</td>
                        </tr>`:""}
                    </table>

                    <hr style="border: none; border-top: 1px solid #4b164c22; margin: 20px 0;" />

                    <!-- Event Details -->
                    <h3 style="color: #4b164c; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">Event Details</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        ${a?`
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase; width: 160px;">Date</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${a}</td>
                        </tr>`:""}
                        ${s?`
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Start Time</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${s}</td>
                        </tr>`:""}
                        ${i?`
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Duration</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${i}</td>
                        </tr>`:""}
                        ${l?`
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Event Type</td>
                            <td style="padding: 7px 0;">
                                <span style="background: #4b164c; color: white; padding: 3px 12px; border-radius: 999px; font-size: 12px; font-weight: bold;">${l}</span>
                            </td>
                        </tr>`:""}
                        ${d?`
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Guest Count</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${d}</td>
                        </tr>`:""}
                    </table>

                    <hr style="border: none; border-top: 1px solid #4b164c22; margin: 20px 0;" />

                    <!-- Services -->
                    <h3 style="color: #4b164c; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">Services Requested</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        ${p?`
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase; width: 160px;">Production</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${p}</td>
                        </tr>`:""}
                        ${c?`
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Equipment</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${c}</td>
                        </tr>`:""}
                        ${u?`
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase; vertical-align: top;">From Pricing</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${u}</td>
                        </tr>`:""}
                    </table>

                    <hr style="border: none; border-top: 1px solid #4b164c22; margin: 20px 0;" />
                    <p style="color: #4b164c99; font-size: 11px; text-align: center; margin: 0;">Sent via GJ Decoration booking form</p>
                </div>
            `})});if(!x.ok){let e=await x.text();return console.error("Resend booking email error:",e),m.NextResponse.json({error:"Failed to send booking email."},{status:502})}return m.NextResponse.json({success:!0},{status:200})}catch(e){return console.error("Booking form error:",e),m.NextResponse.json({error:"Failed to submit booking. Try again later."},{status:500})}}e.s(["POST",0,y],71297);var w=e.i(71297);let v=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/booking/route",pathname:"/api/booking",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/booking/route.ts",nextConfigOutput:"standalone",userland:w,...{}}),{workAsyncStorage:R,workUnitAsyncStorage:E,serverHooks:C}=v;async function k(e,t,o){o.requestMeta&&(0,n.setRequestMeta)(e,o.requestMeta),v.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let m="/api/booking/route";m=m.replace(/\/index$/,"")||"/";let y=await v.prepare(e,t,{srcPage:m,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==o.waitUntil||o.waitUntil.call(o,Promise.resolve()),null;let{buildId:w,deploymentId:R,params:E,nextConfig:C,parsedUrl:k,isDraftMode:N,prerenderManifest:A,routerServerContext:$,isOnDemandRevalidate:T,revalidateOnlyGenerated:P,resolvedPathname:S,clientReferenceManifest:q,serverActionsManifest:j}=y,O=(0,i.normalizeAppPath)(m),_=!!(A.dynamicRoutes[O]||A.routes[S]),D=async()=>((null==$?void 0:$.render404)?await $.render404(e,t,k,!1):t.end("This page could not be found"),null);if(_&&!N){let e=!!A.routes[S],t=A.dynamicRoutes[O];if(t&&!1===t.fallback&&!e){if(C.adapterPath)return await D();throw new f.NoFallbackError}}let z=null;!_||v.isDev||N||(z="/index"===(z=S)?"/":z);let H=!0===v.isDev||!_,I=_&&!H;j&&q&&(0,s.setManifestsSingleton)({page:m,clientReferenceManifest:q,serverActionsManifest:j});let M=e.method||"GET",U=(0,a.getTracer)(),F=U.getActiveScopeSpan(),B=!!(null==$?void 0:$.isWrappedByNextServer),K=!!(0,n.getRequestMeta)(e,"minimalMode"),G=(0,n.getRequestMeta)(e,"incrementalCache")||await v.getIncrementalCache(e,C,A,K);null==G||G.resetRequestCache(),globalThis.__incrementalCache=G;let L={params:E,previewProps:A.preview,renderOpts:{experimental:{authInterrupts:!!C.experimental.authInterrupts},cacheComponents:!!C.cacheComponents,supportsDynamicResponse:H,incrementalCache:G,cacheLifeProfiles:C.cacheLife,waitUntil:o.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,o,n)=>v.onRequestError(e,t,o,n,$)},sharedContext:{buildId:w,deploymentId:R}},J=new l.NodeNextRequest(e),V=new l.NodeNextResponse(t),W=d.NextRequestAdapter.fromNodeNextRequest(J,(0,d.signalFromNodeResponse)(t));try{let n,s=async e=>v.handle(W,L).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=U.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let o=r.get("next.route");if(o){let t=`${M} ${o}`;e.setAttributes({"next.route":o,"http.route":o,"next.span_name":t}),e.updateName(t),n&&n!==e&&(n.setAttribute("http.route",o),n.updateName(t))}else e.updateName(`${M} ${m}`)}),i=async n=>{var a,i;let l=async({previousCacheEntry:r})=>{try{if(!K&&T&&P&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let a=await s(n);e.fetchMetrics=L.renderOpts.fetchMetrics;let i=L.renderOpts.pendingWaitUntil;i&&o.waitUntil&&(o.waitUntil(i),i=void 0);let l=L.renderOpts.collectedTags;if(!_)return await (0,u.sendResponse)(J,V,a,L.renderOpts.pendingWaitUntil),null;{let e=await a.blob(),t=(0,x.toNodeOutgoingHttpHeaders)(a.headers);l&&(t[h.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==L.renderOpts.collectedRevalidate&&!(L.renderOpts.collectedRevalidate>=h.INFINITE_CACHE)&&L.renderOpts.collectedRevalidate,o=void 0===L.renderOpts.collectedExpire||L.renderOpts.collectedExpire>=h.INFINITE_CACHE?void 0:L.renderOpts.collectedExpire;return{value:{kind:b.CachedRouteKind.APP_ROUTE,status:a.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:o}}}}catch(t){throw(null==r?void 0:r.isStale)&&await v.onRequestError(e,t,{routerKind:"App Router",routePath:m,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:I,isOnDemandRevalidate:T})},!1,$),t}},d=await v.handleResponse({req:e,nextConfig:C,cacheKey:z,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:A,isRoutePPREnabled:!1,isOnDemandRevalidate:T,revalidateOnlyGenerated:P,responseGenerator:l,waitUntil:o.waitUntil,isMinimalMode:K});if(!_)return null;if((null==d||null==(a=d.value)?void 0:a.kind)!==b.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(i=d.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});K||t.setHeader("x-nextjs-cache",T?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),N&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,x.fromNodeOutgoingHttpHeaders)(d.value.headers);return K&&_||p.delete(h.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,g.getCacheControlHeader)(d.cacheControl)),await (0,u.sendResponse)(J,V,new Response(d.value.body,{headers:p,status:d.value.status||200})),null};B&&F?await i(F):(n=U.getActiveScopeSpan(),await U.withPropagatedContext(e.headers,()=>U.trace(p.BaseServerSpan.handleRequest,{spanName:`${M} ${m}`,kind:a.SpanKind.SERVER,attributes:{"http.method":M,"http.target":e.url}},i),void 0,!B))}catch(t){if(t instanceof f.NoFallbackError||await v.onRequestError(e,t,{routerKind:"App Router",routePath:O,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:I,isOnDemandRevalidate:T})},!1,$),_)throw t;return await (0,u.sendResponse)(J,V,new Response(null,{status:500})),null}}e.s(["handler",0,k,"patchFetch",0,function(){return(0,o.patchFetch)({workAsyncStorage:R,workUnitAsyncStorage:E})},"routeModule",0,v,"serverHooks",0,C,"workAsyncStorage",0,R,"workUnitAsyncStorage",0,E],58165)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0443w3-._.js.map