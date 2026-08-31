import React, { useState } from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const AFRICA_PATH = "M112.2,184.6L108.8,180.5L106.4,175.5L110.1,167.8L109.1,161.5L104.6,159.2L99.4,160.4L95.5,156.8L96.7,149.9L100.8,147.6L102.9,141.8L105.0,143.3L110.2,137.8L118.6,133.8L123.3,134.7L122.9,136.6L126.9,143.9L132.5,145.7L133.7,149.6L135.8,147.2L139.5,150.6L140.7,155.5L135.6,163.6L135.3,176.7L143.3,176.7L145.7,178.4L149.1,185.1L151.6,186.9L163.6,184.3L165.0,179.2L171.2,173.5L177.2,176.1L182.0,165.8L189.8,152.7L192.7,151.6L192.9,148.2L190.1,143.8L187.9,140.6L187.1,137.1L191.5,130.5L196.9,124.7L198.2,109.2L199.4,107.1L195.5,101.2L194.6,93.3L199.4,90.9L215.3,99.1L238.1,111.5L238.0,108.9L238.1,130.7L233.8,130.7L228.1,146.0L231.4,148.8L232.6,154.5L236.4,159.5L235.7,165.2L239.3,165.4L244.2,169.7L244.6,171.9L255.3,183.9L259.1,186.8L265.1,185.0L271.2,190.3L284,189.4L288.2,185.2L295.8,185.1L295.3,181.8L291.8,180.3L291.3,176.3L282.4,166.8L287.0,165.7L286.9,161.5L287.8,156.1L291.0,154.5L291.4,150.4L296.3,145.5L300.9,123.7L307.0,117.7L302.8,114.6L300.3,98.2L294.2,92.6L290.9,94.1L286.4,99.7L282.3,98.5L242.9,98.5L242.9,59.7L241.5,54.4L243.6,46.2L242.7,44.4L233.6,42.3L233.8,40.6L226.6,38.9L221.4,41.1L218.4,44.5L219.5,49.0L217.6,52.6L213.7,54.0L206.0,49.4L197.5,47.1L195.2,41.9L186.2,39.0L177.8,37.5L170.4,31.7L175.9,25.5L172.4,16.6L168.8,12.9L163.8,15.3L162.5,18.2L162.0,28.9L158.5,32.1L159.6,37.3L165.9,43.7L168.2,54.2L171.8,50.4L171.0,47.5L178.1,41.6L177.9,86.4L180.0,90.6L158.1,104.5L150.2,111.7L142.6,113.3L138.2,114.1L137.7,109.8L131.3,107.6L127.8,103.2L98.9,82.7L90.3,82.7L80.3,70.4L80.3,68.4L58.5,68.4L66.5,64.9L74.8,56.2L74.7,47.4L77.3,41.0L80.9,37.1L89.3,32.4L93.5,22.2L101.1,26.0L107.9,24.9L111.4,26.3L113.7,28.4L114.1,37.0L117.2,41.3L116.3,43.7L108.3,43.7L103.6,46.0L104.2,50.2L98.4,52.7L95.3,56.1L87.7,57.5L80.3,62.6L63.8,140.7L67.2,147.1L62.5,147.6L55.9,145.8L48.6,145.7L41.4,147.5L41.2,143.9L45.8,143.4L50.4,140.3L42.1,141.3L38.1,135.2L39.7,105.0L40.2,99.4L45.9,88.5L50.1,84.4L52.2,76.5L56.3,73.7L64.2,77.4L64.2,90.9L59.3,93.2L59.3,102.0L40.2,102.0L39.7,105.0L40.4,102.9L43.9,107.7L43.0,112.0L44.6,120.5L42.3,128.9L43.5,126.6L52.8,126.0L57.4,128.9L63.0,135.4L66.9,131.0L70.4,132.0L95.6,131.7L90.3,82.7L98.9,82.7L127.8,103.2L131.3,107.6L137.7,109.8L138.2,114.1L142.6,113.3L142.4,127.2L139.1,132.4L128.5,132.8L123.3,134.7L118.6,133.8L110.2,137.8L105.0,143.3L102.9,141.8L100.8,147.6L96.7,149.9L95.5,156.8L90.0,155.7L88.0,158.0L83.6,158.2L81.7,152.2L77.9,146.7L70.7,149.7L67.2,147.1L63.8,140.7L63.0,135.4L66.9,131.0L70.4,132.0L95.6,131.7L90.3,82.7ZM129.9,163.7L135.6,163.6L140.7,155.5L139.5,150.6L135.8,147.2L133.7,149.6L132.5,145.7L126.9,143.9L122.9,136.6L123.3,134.7L128.5,132.8L139.1,132.4L142.4,127.2L142.6,113.3L150.2,111.7L158.1,104.5L180.0,90.6L186.9,92.2L190.9,95.3L194.6,93.3L195.5,101.2L199.4,107.1L198.2,109.2L196.9,124.7L191.5,130.5L187.1,137.1L187.9,140.6L182.3,143.8L177.5,142.3L171.3,142.8L168.7,145.2L159.9,142.4L155.6,144.2L148.9,139.8L143.7,140.8L139.8,146.5L135.8,147.2L133.7,149.6L132.5,145.7L126.9,143.9L122.9,136.6L123.3,134.7L128.5,132.8L139.1,132.4L142.4,127.2L142.6,113.3L150.2,111.7L158.1,104.5L180.0,90.6L186.9,92.2L190.9,95.3L194.6,93.3L195.5,101.2L199.4,107.1L198.2,109.2L196.9,124.7L191.5,130.5L187.1,137.1L187.9,140.6L182.3,143.8L177.5,142.3L171.3,142.8L168.7,145.2L159.9,142.4L155.6,144.2L148.9,139.8L143.7,140.8L139.8,146.5L135.8,147.2L133.7,149.6L132.5,145.7L126.9,143.9L122.9,136.6L123.3,134.7L128.5,132.8L139.1,132.4L142.4,127.2L142.6,113.3L150.2,111.7L158.1,104.5L180.0,90.6L186.9,92.2L190.9,95.3L194.6,93.3L195.5,101.2L199.4,107.1L198.2,109.2L196.9,124.7L191.5,130.5L187.1,137.1L187.9,140.6L182.3,143.8L177.5,142.3L171.3,142.8L168.7,145.2L159.9,142.4L155.6,144.2L148.9,139.8L143.7,140.8L139.8,146.5L135.8,147.2L133.7,149.6L132.5,145.7L126.9,143.9L122.9,136.6L123.3,134.7L128.5,132.8L139.1,132.4L142.4,127.2L142.6,113.3L150.2,111.7L158.1,104.5L180.0,90.6L186.9,92.2L190.9,95.3L194.6,93.3L195.5,101.2L199.4,107.1L198.2,109.2L196.9,124.7L191.5,130.5L187.1,137.1L187.9,140.6L182.3,143.8L177.5,142.3L171.3,142.8L168.7,145.2L159.9,142.4L155.6,144.2L148.9,139.8L143.7,140.8L139.8,146.5L135.8,147.2L133.7,149.6L132.5,145.7L126.9,143.9L122.9,136.6L123.3,134.7L128.5,132.8L139.1,132.4L142.4,127.2L142.6,113.3L150.2,111.7L158.1,104.5L180.0,90.6L186.9,92.2L190.9,95.3L194.6,93.3L195.5,101.2L199.4,107.1L198.2,109.2L196.9,124.7L191.5,130.5L187.1,137.1L187.9,140.6L182.3,143.8L177.5,142.3L171.3,142.8L168.7,145.2L159.9,142.4L155.6,144.2L148.9,139.8L143.7,140.8L139.8,146.5ZM130.0,177.4L127.9,178.0L124.6,171.4L123.9,157.7L121.4,153.4L126.6,154.1L125.9,157.1L128.7,159.0L129.9,163.7L135.6,163.6L140.7,155.5L139.5,150.6L135.8,147.2L133.7,149.6L132.5,145.7L126.9,143.9L122.9,136.6L123.3,134.7L128.5,132.8L139.1,132.4L142.4,127.2L142.6,113.3L150.2,111.7L158.1,104.5L180.0,90.6L186.9,92.2L190.9,95.3L194.6,93.3L195.5,101.2L199.4,107.1L198.2,109.2L196.9,124.7L191.5,130.5L187.1,137.1L187.9,140.6L182.3,143.8L177.5,142.3L171.3,142.8L168.7,145.2L159.9,142.4L155.6,144.2L148.9,139.8L143.7,140.8L139.8,146.5ZM111.4,183.1L111.4,181.4L127.9,178.0L112.2,184.6ZM72.5,166.4L68.0,159.0L61.8,159.6L57.9,163.7L49.6,154.3L51.2,151.5L55.9,150.5L55.9,145.8L62.5,147.6L67.2,147.1L70.7,149.7L77.9,146.7L81.7,152.2L83.6,158.2L83.4,167.9L81.2,170.9L76.6,171.6L76.3,167.1ZM41.4,147.5L48.6,145.7L55.9,145.8L55.9,150.5L51.2,151.5L49.6,154.3L46.4,150.1ZM85.8,186.5L86.3,179.3L80.7,175.9L81.2,170.9L83.4,167.9L83.6,158.2L88.0,158.0L90.0,155.7L95.5,156.8L99.4,160.4L104.6,159.2L109.1,161.5L110.1,167.8L106.4,175.5L108.8,180.5L108.0,182.8L100.5,181.9L94.0,183.2ZM324.5,188.3L320.1,193.8L320.1,211.7L322.9,215.6L316.5,220.4L311.5,230.1L303.8,224.5L304.1,222.3L286.0,212.4L285.9,207.0L291.2,199.5L290.7,195.3L286.3,187.1L288.2,185.2L295.7,185.2L300.3,186.1L306.3,190.1L312.9,190.8L319.1,186.8ZM262.9,358.3L257.8,363.2L252.6,357.4L260.5,351.6L264.4,355.9ZM66.6,174.0L72.5,166.4L76.3,167.1L76.6,171.6L81.2,170.9L80.7,175.9L86.3,179.3L85.8,186.5L78.4,183.3ZM180.0,90.6L177.9,86.4L170.7,83.6L167.5,76.6L169.8,74.6L169.3,58.5L168.2,54.2L171.8,50.4L171.0,47.5L178.1,41.6L177.8,37.5L186.2,39.0L195.2,41.9L197.5,47.1L206.0,49.4L213.7,54.0L217.6,52.6L219.5,49.0L218.4,44.5L221.4,41.1L226.6,38.9L233.8,40.6L233.6,42.3L242.7,44.4L243.6,46.2L241.5,54.4L242.9,59.7L242.9,98.5L242.9,108.9L238.0,108.9L238.1,111.5L215.3,99.1L199.4,90.9L194.6,93.3L190.9,95.3L186.9,92.2ZM355.6,272.9L355.6,272.9L355.6,272.9ZM354.1,276.1L353.5,273.8L357.8,272.6L358.6,267.7L361.3,267.6L364.1,274.0L366.0,281.8L364.8,285.7L361.9,283.5L362.6,290.0L360.6,297.7L349.6,332.2L340.5,335.4L334.7,332.2L333.4,324.1L331.0,318.0L332.2,313.0L337.0,306.0L334.5,293.0L336.8,286.9L345.8,284.4ZM282.6,275.9L280.5,274.0L283.3,268.6L282.7,260.5L284.9,258.8L281.2,253.2L288.9,256.3L291.0,263.8L288.1,267.0L289.5,273.3L295.4,279.1L295.1,285.9L291.8,288.6L292.6,291.5L287.6,285.4L289.2,282.2L288.1,277.7L284.6,278.5ZM98.9,82.7L127.8,103.2L131.3,107.6L137.7,109.8L138.2,114.1L142.6,113.3L142.4,127.2L139.1,132.4L128.5,132.8L123.3,134.7L118.6,133.8L110.2,137.8L105.0,143.3L102.9,141.8L100.8,147.6L96.7,149.9L95.5,156.8L90.0,155.7L88.0,158.0L83.6,158.2L81.7,152.2L77.9,146.7L70.7,149.7L67.2,147.1L63.8,140.7L63.0,135.4L66.9,131.0L70.4,132.0L95.6,131.7L90.3,82.7ZM80.3,70.4L98.9,82.7L90.3,82.7L95.6,131.7L70.4,132.0L66.9,131.0L63.0,135.4L57.4,128.9L52.8,126.0L43.5,126.6L42.3,128.9L44.6,120.5L43.0,112.0L43.9,107.7L40.4,102.9L39.7,105.0L40.2,102.0L59.3,102.0L59.3,93.2L64.2,90.9L64.2,77.4L80.3,77.4ZM400,308.8L400,308.8L400,308.8ZM80.3,68.4L58.5,68.4L66.5,64.9L74.8,56.2L74.7,47.4L77.3,41.0L80.9,37.1L89.3,32.4L93.5,22.2L101.1,26.0L107.9,24.9L111.4,26.3L113.7,28.4L114.1,37.0L117.2,41.3L116.3,43.7L108.3,43.7L103.6,46.0L104.2,50.2L98.4,52.7L95.3,56.1L87.7,57.5L80.3,62.6ZM281.0,342.2L277.3,342.2L276.5,337.4L276.8,329.4L273.3,318.7L278.7,312.9L281.8,305.0L280.5,303.4L281.9,297.7L281.4,289.4L269.0,284.0L268.1,280.7L282.6,275.9L284.6,278.5L288.1,277.7L289.2,282.2L287.6,285.4L292.6,291.5L291.8,288.6L295.1,285.9L295.4,279.1L289.5,273.3L288.1,267.0L291.0,263.8L303.1,264.6L306.1,262.2L311.8,261.8L317.4,258.4L319.4,279.5L313.9,288.5L301.8,294.7L297.2,300.5L294.4,301.6L289.5,308.2L293.8,317.7L293.6,327.6L291.6,330.3L281.0,335.2L279.5,337.5ZM235.5,294.0L244.2,294.9L236.7,298.1L234.6,295.9L223.5,297.6L223.5,316.5L218.7,316.5L218.7,331.0L218.7,350.8L214.4,353.8L206.2,352.4L204.5,348.7L201.8,351.7L196.0,344.8L192.0,327.6L191.9,322.5L192.3,320.1L186.8,310.6L182.3,300.7L178.9,295.8L178.9,292.2L185.7,290.6L190.8,292.8L211.2,292.8L212.7,294.7L225.4,296.0ZM139.5,150.6L135.8,147.2L133.7,149.6L132.5,145.7L126.9,143.9L122.9,136.6L123.3,134.7L128.5,132.8L139.1,132.4L142.4,127.2L142.6,113.3L150.2,111.7L158.1,104.5L180.0,90.6L186.9,92.2L190.9,95.3L194.6,93.3L195.5,101.2L199.4,107.1L198.2,109.2L196.9,124.7L191.5,130.5L187.1,137.1L187.9,140.6L182.3,143.8L177.5,142.3L171.3,142.8L168.7,145.2L159.9,142.4L155.6,144.2L148.9,139.8L143.7,140.8L139.8,146.5ZM187.9,140.6L190.1,143.8L192.9,148.2L192.7,151.6L189.8,152.7L182.0,165.8L177.2,176.1L171.2,173.5L165.0,179.2L163.6,184.3L151.6,186.9L149.1,185.1L145.7,178.4L143.3,176.7L135.3,176.7L135.6,163.6L140.7,155.5L139.5,150.6L139.8,146.5L143.7,140.8L148.9,139.8L155.6,144.2L159.9,142.4L168.7,145.2L171.3,142.8L177.5,142.3L182.3,143.8ZM391.2,311.3L391.2,311.3L391.2,311.3ZM262.3,220.8L265.1,214.2L269.4,212.7L271.3,217.6L269.8,219.1ZM153.6,207.4L153.6,207.4L153.6,207.4ZM42.3,128.9L43.5,126.6L52.8,126.0L57.4,128.9L63.0,135.4L63.8,140.7L67.2,147.1L62.5,147.6L55.9,145.8L48.6,145.7L41.4,147.5L41.2,143.9L45.8,143.4L50.4,140.3L42.1,141.3L38.1,135.2ZM390.4,230.7L390.4,230.7L390.4,230.7ZM57.9,163.7L61.8,159.6L68.0,159.0L72.5,166.4L66.6,174.0L61.7,171.7ZM322.9,215.6L320.1,211.7L320.1,193.8L324.5,188.3L334.6,183.5L339.2,183.8L353.9,168.7L349.2,168.7L334.7,163.8L328.2,155.8L329.5,154.0L331.0,151.7L336.0,156.8L343.4,154.7L346.5,155.6L369.8,149.9L369.5,156.9L367.7,161.7L354.0,185.6L343.8,196.2L332.2,204.4ZM192.3,320.1L191.9,322.5L192.3,320.1ZM264.0,317.5L273.3,318.7L276.8,329.4L276.5,337.4L273.9,336.2L270.9,340.2L272.6,344.1L277.3,342.2L281.0,342.2L278.6,351.4L272.9,357.0L268.9,364.3L260.0,374.1L253.0,379.6L242.0,383.5L236.4,382.2L229.1,382.9L218.7,387.1L212.9,384.4L208.3,375.6L210.4,374.4L209.9,369.0L205.6,361.5L201.8,351.7L204.5,348.7L206.2,352.4L214.4,353.8L218.7,350.8L218.7,331.0L222.9,338.4L222.1,342.4L226.8,342.3L235.4,333.8L241.1,336.7L245.7,335.6L247.1,330.9L251.8,328.3L252.4,325.4L259.1,319.5ZM262.9,358.3L264.4,355.9L260.5,351.6L252.6,357.4L257.8,363.2ZM286.9,161.5L283.0,155.0L279.0,153.9L273.5,160.1L267.0,157.6L261.0,162.2L249.5,161.1L243.5,157.5L239.3,165.4L235.7,165.2L236.4,159.5L232.6,154.5L231.4,148.8L228.1,146.0L233.8,130.7L238.1,130.7L238.0,108.9L242.9,108.9L242.9,98.5L282.3,98.5L286.4,99.7L290.9,94.1L294.2,92.6L300.3,98.2L302.8,114.6L307.0,117.7L300.9,123.7L296.3,145.5L291.4,150.4L291.0,154.5L287.8,156.1ZM286.9,161.5L287.0,165.7L282.4,166.8L291.3,176.3L291.8,180.3L295.3,181.8L295.8,185.1L288.2,185.2L284,189.4L271.2,190.3L265.1,185.0L259.1,186.8L255.3,183.9L244.6,171.9L244.2,169.7L239.3,165.4L243.5,157.5L249.5,161.1L261.0,162.2L267.0,157.6L273.5,160.1L279.0,153.9L283.0,155.0ZM276.5,337.4L277.3,342.2L272.6,344.1L270.9,340.2L273.9,336.2ZM314.6,232.5L314.6,232.5L314.6,232.5ZM311.9,237.8L311.9,237.8L311.9,237.8ZM270.7,247.2L265.6,239.4L264.2,229.0L267.2,228.2L271.1,221.9L269.8,219.1L271.3,217.6L269.4,212.7L286.0,212.4L304.1,222.3L303.8,224.5L311.5,230.1L309.4,236.7L313.1,241.8L312.2,249.8L314.5,256.0L317.4,258.4L311.8,261.8L306.1,262.2L303.1,264.6L291.0,263.8L288.9,256.3L281.2,253.2L271.8,249.0ZM130.0,177.4L127.9,178.0L124.6,171.4L123.9,157.7L121.4,153.4L126.6,154.1L125.9,157.1L128.7,159.0L129.9,163.7ZM177.8,37.5L178.1,41.6L171.0,47.5L171.8,50.4L168.2,54.2L165.9,43.7L159.6,37.3L158.5,32.1L162.0,28.9L162.5,18.2L163.8,15.3L168.8,12.9L172.4,16.6L175.9,25.5L170.4,31.7ZM269.4,212.7L265.1,214.2L266.9,203.5L273.3,197.1L270.6,195.7L271.2,190.6L275.7,189.1L277.6,190.5L284.0,189.4L286.3,187.1L290.7,195.3L291.2,199.5L285.9,207.0L286.0,212.4ZM58.5,68.4L80.3,68.4L80.3,70.4L80.3,77.4L64.2,77.4L64.2,90.9L59.3,93.2L59.3,102.0L40.2,102.0L39.7,105.0L40.2,99.4L45.9,88.5L50.1,84.4L52.2,76.5L56.3,73.7ZM264.2,229.0L265.6,239.4L270.7,247.2L261.7,248.6L259.2,252.6L260.7,259.3L259.1,263.6L262.3,267.8L266.1,266.7L266.1,273.1L262.3,272.8L259.1,268.1L240.2,263.3L238.0,260.3L229.8,262.1L229.1,255.7L227.4,253.2L227.3,242.8L216.5,241.4L215.7,246.3L206.8,246.5L203.9,242.4L202.3,236.2L185.8,235.9L181.1,235.4L185.3,229.9L186.9,231.1L191.7,228.2L193.7,230.9L200.5,223.6L200.3,218.0L207.7,210.1L209.5,196.8L212.1,190.7L211.7,186.8L215.8,182.7L221.7,186.2L231.0,187.1L245.5,181.5L254.7,183.3L259.1,186.8L266.1,185.5L271.2,190.6L270.6,195.7L273.3,197.1L266.9,203.5L265.1,214.2L262.3,220.8ZM235.5,294.0L228.4,286.7L228.4,270.9L238.1,270.9L238.0,260.3L240.2,263.3L259.1,268.1L262.3,272.8L266.1,273.1L266.1,266.7L262.3,267.8L259.1,263.6L260.7,259.3L259.2,252.6L261.7,248.6L270.7,247.2L271.8,249.0L281.2,253.2L284.9,258.8L282.7,260.5L283.3,268.6L280.5,274.0L282.6,275.9L268.1,280.7L269.0,284.0L261.5,286.1L261.0,288.6L256.5,290.7L251.1,296.3L244.2,294.9ZM273.3,318.7L264.0,317.5L257.4,314.2L256.0,308.8L248.4,303.6L244.2,294.9L251.1,296.3L256.5,290.7L261.0,288.6L261.5,286.1L269.0,284.0L281.4,289.4L281.9,297.7L280.5,303.4L281.8,305.0L278.7,312.9Z";

export const PartnerPage = () => {
  const [formData, setFormData] = useState({
    organization: '',
    name: '',
    email: '',
    partnershipType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.organization.trim()) newErrors.organization = "Please enter your organization.";
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    
    if (!formData.partnershipType) newErrors.partnershipType = "Please select a partnership type.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 800);
    }
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <div className="w-full bg-[#F26522] flex flex-col shrink-0">
        <div className="w-full bg-[#FFF8F0] rounded-b-[40px] md:rounded-b-[60px] shadow-[0_10px_40px_rgba(242,101,34,0.15)] relative flex flex-col shrink-0 z-10">
          <main className="relative pt-[100px] md:pt-[140px] pb-16 md:pb-24 px-6 flex flex-col items-center justify-center text-center animate-fade-in">
            {/* Centered Map Visual */}
            <div className="relative w-[240px] sm:w-[320px] md:w-[400px] lg:w-[480px] aspect-square flex items-center justify-center mb-2 md:mb-6">
              <div className="absolute inset-0">
                <svg viewBox="0 -10 400 420" className="w-full h-full drop-shadow-sm">
                  <path
                    d={AFRICA_PATH}
                    fill="rgba(255, 232, 214, 0.7)"
                    stroke="#F26522"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:fill-[#F26522]/20 transition-colors duration-500"
                  />
                </svg>
              </div>
            </div>

            {/* Typography */}
            <div className="relative z-30 max-w-[680px] mx-auto">
              <h1 className="text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                Build With Us
              </h1>
              <p className="mt-4 md:mt-6 text-[18px] sm:text-[20px] md:text-[24px] font-medium text-[#1A1A1A] leading-[1.3]">
                Help shape the infrastructure that makes renting more trustworthy across Africa.
              </p>
              
              <p className="mt-4 md:mt-6 text-[15px] sm:text-[16px] md:text-[18px] text-[#6B6B6B] leading-[1.6] max-w-[600px] mx-auto">
                Whether you bring technology, capital, distribution, institutional reach, or deep rental-market knowledge, there may be a meaningful way to work together.
              </p>

              {/* CTAs */}
              <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <button onClick={scrollToContact} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F26522] text-white text-[16px] font-semibold px-[36px] py-[16px] rounded-[100px] shadow-[0_8px_24px_rgba(242,101,34,0.25)] hover:bg-[#E55A1B] hover:shadow-[0_12px_32px_rgba(242,101,34,0.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26522] focus:ring-offset-[#FFF8F0]">
                  Start a Conversation
                </button>
                
                <button onClick={() => document.getElementById("options")?.scrollIntoView({ behavior: "smooth" })} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-[#1A1A1A]/80 text-[#1A1A1A] text-[16px] font-semibold px-[36px] py-[16px] rounded-[100px] hover:bg-[#1A1A1A]/5 hover:border-[#1A1A1A] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A] focus:ring-offset-[#FFF8F0]">
                  See How We Work Together
                  <ArrowDownIcon className="w-[18px] h-[18px] transition-transform duration-300" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Partnership Positioning */}
      <section className="w-full py-20 md:py-32 px-6 flex flex-col items-center text-center">
        <div className="max-w-[800px]">
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-[#1A1A1A] leading-[1.2] tracking-tight mb-6">
            We’re building neutral infrastructure, so partnership doesn’t have to mean becoming part of one side of the rental market.
          </h2>
          <p className="text-[18px] md:text-[22px] font-medium text-[#1A1A1A]/70 leading-[1.5]">
            We can work alongside the people, platforms, institutions, and businesses already shaping how renting happens.
          </p>
        </div>
      </section>

      {/* Who Can Partner With Us */}
      <section id="options" className="w-full py-16 md:py-24 px-6 bg-white border-y border-[#1A1A1A]/5 flex flex-col items-center">
        <div className="max-w-[800px] w-full">
          <p className="text-[20px] md:text-[24px] font-semibold text-[#1A1A1A] mb-12 border-b border-[#1A1A1A]/10 pb-6">
            There’s more than one way to build with us.
          </p>
          
          <div className="flex flex-col gap-10 md:gap-14">
            <div className="flex flex-col gap-2">
              <h3 className="text-[22px] md:text-[28px] font-bold text-[#F26522]">Technology</h3>
              <p className="text-[16px] md:text-[18px] text-[#1A1A1A]/80 leading-[1.6]">
                Bring infrastructure, technical capability, or systems that can strengthen the rental ecosystem.
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <h3 className="text-[22px] md:text-[28px] font-bold text-[#F26522]">Capital</h3>
              <p className="text-[16px] md:text-[18px] text-[#1A1A1A]/80 leading-[1.6]">
                Support the development of infrastructure designed for long-term rental trust.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[22px] md:text-[28px] font-bold text-[#F26522]">Distribution</h3>
              <p className="text-[16px] md:text-[18px] text-[#1A1A1A]/80 leading-[1.6]">
                Help us reach the people and businesses already participating in rental markets.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[22px] md:text-[28px] font-bold text-[#F26522]">Institutions</h3>
              <p className="text-[16px] md:text-[18px] text-[#1A1A1A]/80 leading-[1.6]">
                Bring policy, market knowledge, networks, or institutional capacity to the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Principle */}
      <section className="w-full py-20 md:py-24 px-6 flex flex-col items-center text-center">
        <div className="max-w-[700px]">
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#1A1A1A] leading-[1.2] tracking-tight mb-4">
            We’re not looking for logos. We’re looking for alignment.
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#1A1A1A]/70 leading-[1.5]">
            If you see a meaningful way to contribute, distribute, integrate, invest, or collaborate, tell us what you have in mind.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full pb-24 md:pb-32 px-6 flex flex-col items-center relative z-20">
        <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-20">
          
          {/* Option 1 */}
          <div className="flex flex-col gap-4 items-start">
            <h3 className="text-[24px] md:text-[30px] font-bold text-[#1A1A1A]">
              Have something specific in mind?
            </h3>
            <p className="text-[16px] md:text-[18px] text-[#1A1A1A]/70 leading-[1.6] mb-2">
              Start with an email. Give us the short version and we’ll take it from there.
            </p>
            <a 
              href="mailto:partnership@mydomos.org" 
              className="text-[18px] md:text-[20px] font-semibold text-[#F26522] hover:text-[#D1551A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522] rounded-sm"
            >
              partnership@mydomos.org
            </a>
          </div>

          {/* Option 2 */}
          <div className="flex flex-col gap-6 bg-white p-8 md:p-10 rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-[#1A1A1A]/5">
            <div className="flex flex-col gap-2 mb-2">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#1A1A1A]">
                Want to give us the full picture?
              </h3>
              <p className="text-[15px] md:text-[16px] text-[#1A1A1A]/60">
                Tell us a little about who you are and what you’d like to explore.
              </p>
            </div>

            {isSuccess ? (
              <div className="flex flex-col gap-2 py-10 items-center justify-center text-center bg-[#FFF5EB] rounded-xl border border-[#F26522]/20">
                <h4 className="text-[22px] font-bold text-[#1A1A1A]">Thanks. We’ve got it.</h4>
                <p className="text-[16px] text-[#1A1A1A]/70">We’ll review your message and get back to you.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="organization" className="text-[14px] font-bold text-[#1A1A1A]">Organization / Company</label>
                  <input
                    id="organization"
                    type="text"
                    placeholder="Your organization"
                    value={formData.organization}
                    onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                    className={`w-full h-[52px] md:h-[50px] px-4 bg-[#F9F9F9] border ${errors.organization ? 'border-[#F26522]' : 'border-[#1A1A1A]/10'} rounded-lg text-[16px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:bg-white focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors`}
                  />
                  {errors.organization && <span className="text-[13px] text-[#F26522] font-medium">{errors.organization}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[14px] font-bold text-[#1A1A1A]">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className={`w-full h-[52px] md:h-[50px] px-4 bg-[#F9F9F9] border ${errors.name ? 'border-[#F26522]' : 'border-[#1A1A1A]/10'} rounded-lg text-[16px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:bg-white focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors`}
                  />
                  {errors.name && <span className="text-[13px] text-[#F26522] font-medium">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[14px] font-bold text-[#1A1A1A]">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className={`w-full h-[52px] md:h-[50px] px-4 bg-[#F9F9F9] border ${errors.email ? 'border-[#F26522]' : 'border-[#1A1A1A]/10'} rounded-lg text-[16px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:bg-white focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors`}
                  />
                  {errors.email && <span className="text-[13px] text-[#F26522] font-medium">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="partnershipType" className="text-[14px] font-bold text-[#1A1A1A]">How would you like to work with us?</label>
                  <select
                    id="partnershipType"
                    value={formData.partnershipType}
                    onChange={(e) => setFormData(prev => ({ ...prev, partnershipType: e.target.value }))}
                    className={`w-full h-[52px] md:h-[50px] px-4 bg-[#F9F9F9] border ${errors.partnershipType ? 'border-[#F26522]' : 'border-[#1A1A1A]/10'} rounded-lg text-[16px] text-[#1A1A1A] focus:outline-none focus:bg-white focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors cursor-pointer`}
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Technology">Technology</option>
                    <option value="Investment">Investment</option>
                    <option value="Distribution">Distribution</option>
                    <option value="Government / Institution">Government / Institution</option>
                    <option value="Strategic Partnership">Strategic Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.partnershipType && <span className="text-[13px] text-[#F26522] font-medium">{errors.partnershipType}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[14px] font-bold text-[#1A1A1A]">Tell us more <span className="font-normal text-[#1A1A1A]/40">(Optional)</span></label>
                  <textarea
                    id="message"
                    placeholder="What are you hoping to explore with MyDomos?"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#1A1A1A]/10 rounded-lg text-[16px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:bg-white focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[52px] bg-[#F26522] hover:bg-[#D1551A] text-white text-[16px] font-semibold rounded-lg px-6 mt-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Start a Conversation'}
                </button>
                
                <p className="text-[13px] text-center text-[#1A1A1A]/50 mt-1">
                  We’ll review your message and get back to you.
                </p>

              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};
