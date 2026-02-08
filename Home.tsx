/*
 * Design Philosophy: Industrial Luxury
 * - Diagonal dynamic layout with asymmetric sections
 * - Dark charcoal background with dark red and golden accents
 * - Hexagonal icons and metallic glowing lines
 * - Cairo font for headings, Tajawal for body text
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Store, 
  Wrench, 
  Building2, 
  ShoppingBag,
  CheckCircle2,
  Package,
  Truck,
  FileText,
  MessageCircle,
  Phone,
  Mail
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
    quantity: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم إرسال طلبك بنجاح! سنتواصل معك قريباً");
    setFormData({ name: "", phone: "", businessType: "", quantity: "" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/966500000000", "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="hexagon w-12 h-12 bg-primary flex items-center justify-center">
              <Package className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-foreground">ابو عبدالله</h1>
              <p className="text-xs text-muted-foreground">لقطع الاكسسورات</p>
            </div>
          </div>
          <Button 
            onClick={handleWhatsApp}
            className="bg-primary hover:bg-primary/90 glow-red"
          >
            <MessageCircle className="w-4 h-4 ml-2" />
            تواصل معنا
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden metallic-texture"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url('https://private-us-east-1.manuscdn.com/sessionFile/GGiQePxIeV2c1r5E6OSfhJ/sandbox/Iv724LXptrjkflUCqiwII4-img-1_1770521977000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR0dpUWVQeEllVjJjMXI1RTZPU2ZoSi9zYW5kYm94L0l2NzI0TFhwdHJqa2ZsVUNxaXdJSTQtaW1nLTFfMTc3MDUyMTk3NzAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jJEvHw96lFmqMp6ssI2mMWs8E2fXzxcHyMQdGr7vfkmOvpk81QJ-90t~Kbz8GFx9jzIBt3ctFnRWztionZNNk-EbIxKnngiCoxXKWMxjK78zrpya0S6gf2uUHf6FAbc~uDx34HH9mU0UJqZL5gIbUdfBe6j~JVoTIH6zfgkEkDFQXXtLBcRS4w8-GEgSAMGmARf81aSEwee91OgtbDY87~9SaPwo0q5G2JPkLtGDRRVAX1lYe5cIZTtkOauAbVV5RyGt4rMXLfuAPfnCZMxPVwQ5xxmGXWiqPQZznphkBMs1bYiz5hbOk4AG2l~LX5qt2YNs3pCtN2MIfZHivmoDDA__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground leading-tight">
              توريد قطع غيار وإكسسوارات سيارات
              <span className="block text-primary mt-2">أسعار عويل مباشرة</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-medium">
              نخدم جميع أنواع السيارات بشكل احترافي بأسعار تنافسية وجودة مضمونة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-xl py-6 px-8 glow-red"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                اطلب تسعيرة عويل
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-xl py-6 px-8 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                واتساب مباشر
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-card diagonal-section">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-foreground">
            لمن نخدم
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 glow-red"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Store, title: "سيارات سيدان", desc: "إكسسوارات وقطع غيار متخصصة" },
              { icon: Building2, title: "سيارات رياضية", desc: "قطع أداء عالي وتعديلات" },
              { icon: Wrench, title: "سيارات دفع رباعي", desc: "قطع غيار قوية وموثوقة" },
              { icon: ShoppingBag, title: "جميع الماركات", desc: "أصلية وبديلة بجودة عالية" }
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className="bg-background border-border hover:border-primary transition-all duration-300 hover:glow-red group"
              >
                <CardContent className="p-6 text-center">
                  <div className="hexagon w-20 h-20 bg-primary/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary transition-all">
                    <item.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-all" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-foreground">
            أقسام المنتجات
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12 glow-gold"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "إكسسوارات داخلية",
                image: "https://private-us-east-1.manuscdn.com/sessionFile/GGiQePxIeV2c1r5E6OSfhJ/sandbox/Iv724LXptrjkflUCqiwII4-img-2_1770521981000_na1fn_aW50ZXJpb3ItYWNjZXNzb3JpZXM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR0dpUWVQeEllVjJjMXI1RTZPU2ZoSi9zYW5kYm94L0l2NzI0TFhwdHJqa2ZsVUNxaXdJSTQtaW1nLTJfMTc3MDUyMTk4MTAwMF9uYTFmbl9hVzUwWlhKcGIzSXRZV05qWlhOemIzSnBaWE0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DRe~5n9vA4PPgUpseE7ZS4tCbY9xSr6mY9~zx5XghoPKHUrSAFePdz0Zyw8TYpfoYQtzM~O4~VOZKp1AmvAYX~5hoGTGK4TRY8B5hdfAhvD-XdObWJWad479EPNbJLA4-0X8YjiAHmM6jETYvYdkAZHZmy1vBpJzCDOg9BB6dOSLfv0X1CDetcXFu8d0ZoYCuDM7TlwuandDoUTbCO5tyEoeYQkdJuqG7giPbqY3s8gLGSb8OP1QjK9OQ3FznKF167KjUvgZ-gXb~K10850gV7DwGjd14m4-dHByJ76DBIigvFPEmswAKeXStQ-Sq94a2JhwGuYY1xkF-UHA2b~wjA__",
                items: ["أغطية مقاعد جلدية وقماش", "سجاد أرضيات فاخر", "عجلات قيادة جلد وكربون", "تابلوهات كربون فايبر", "إضاءة داخلية LED", "ستائر شمسية", "حامل أكواب", "منظم أدراج", "عطور السيارة", "مسند رأس", "وسائد مقاعد", "غطاء عجلة القيادة"]
              },
              {
                title: "إكسسوارات خارجية",
                image: "https://private-us-east-1.manuscdn.com/sessionFile/GGiQePxIeV2c1r5E6OSfhJ/sandbox/Iv724LXptrjkflUCqiwII4-img-3_1770521978000_na1fn_ZXh0ZXJpb3ItYWNjZXNzb3JpZXM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR0dpUWVQeEllVjJjMXI1RTZPU2ZoSi9zYW5kYm94L0l2NzI0TFhwdHJqa2ZsVUNxaXdJSTQtaW1nLTNfMTc3MDUyMTk3ODAwMF9uYTFmbl9aWGgwWlhKcGIzSXRZV05qWlhOemIzSnBaWE0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZumMeTKWtrxFKMf4Fbe--m8qxEIrZXL0VU5~-4o36KdPLqd5dtRGIbCsEJbvWmUv37LAw6xXvbsyjbJgjPEUWJfzb9SIKhBaO7EM184kWtOJ77qgqegrXiIE~xnpEQhXIIIpi6HUOUa5vRHCp96Vj99EwSbyMM~WwkPqGqwAy1G1aTrVBXaTfVhFevh8lGv13C3hdVrnunlQRMnZHebVcu9Ak0XSWxW4xhzh3gJun2X0H9eydcY2J75mspYGrYHBfR8GzNQWNgQkYTV7GcRrO-u3XQgqnTW8rWxlIdPBW8Leui-n4RNYdXPQMSGvbY-egT~v~lUBdrylH~bpeLzjNQ__",
                items: ["شبكات أمامية كروم وألمنيوم", "إضاءة LED أمامية وخلفية", "جنوط رياضية وألمنيوم", "مرايا جانبية كهربائية", "أسبويلر خلفي", "عتبات جانبية", "حماية الدرجات", "ملصقات جسم السيارة", "غطاء محرك", "أبواب جانبية", "حماية الأركان", "شفاطات هواء"]
              },
              {
                title: "قطع غيار استهلاكية",
                image: "https://private-us-east-1.manuscdn.com/sessionFile/GGiQePxIeV2c1r5E6OSfhJ/sandbox/Iv724LXptrjkflUCqiwII4-img-4_1770521981000_na1fn_c3BhcmUtcGFydHM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR0dpUWVQeEllVjJjMXI1RTZPU2ZoSi9zYW5kYm94L0l2NzI0TFhwdHJqa2ZsVUNxaXdJSTQtaW1nLTRfMTc3MDUyMTk4MTAwMF9uYTFmbl9jM0JoY21VdGNHRnlkSE0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IbGnfLUD3xlF99Z6UHlJnqwHdW52HcZh1bqZNYcvUBgEGrFbuMLEQ2ZA4ogBdla7CWGkhRKQCQ-~yf8w0dhjiwY83iMzAfXZpyf-vEfWmZ-Uj1KnhH7c9GcjCoVZeXvCCWhkq50zxityhUqc8dy5PQXhk2pLgInBLAdYxl-kWvLFit1k-XgqiPpyLew1~cLL54vFkqp~wKOXYe2vSfYdBbaAFtrM8QJDQXYDbTC3MklITO-9XXTxR6MDbuNkEhzYZJ6ODtB0qmkNO5EUeAlV6fGKikL7fn-bZXoaUnBDXh0Ww6gg5giWCz-UWrJ55QJAaRn8xy~SiInOc-lnr2xWvw__",
                items: ["فلاتر زيت محرك", "فلاتر هواء", "تيل فرامل أمامي وخلفي", "بواجي إشعال", "سيور محرك", "جوانات محرك", "سائل فرامل", "سائل تبريد", "زيت محرك", "بطاريات سيارة", "مساحات زجاج", "مصابيح إضاءة"]
              },
              {
                title: "قطع غيار متقدمة",
                image: "https://private-us-east-1.manuscdn.com/sessionFile/GGiQePxIeV2c1r5E6OSfhJ/sandbox/Iv724LXptrjkflUCqiwII4-img-5_1770521979000_na1fn_d2hvbGVzYWxlLWJ1c2luZXNz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR0dpUWVQeEllVjJjMXI1RTZPU2ZoSi9zYW5kYm94L0l2NzI0TFhwdHJqa2ZsVUNxaXdJSTQtaW1nLTVfMTc3MDUyMTk3OTAwMF9uYTFmbl9kMmh2YkdWellXeGxMV0oxYzJsdVpYTnoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AO4SuTyfklSiufzJTdHybA4OSJ0TbyBXcco5lJPVr7gljPFnrWXLEVBhm1CqHRvc~CiREleOslcU6GMhdjmOrOBoUIiMuviump7wAzCGNemX4MNBl~YhIHo0k8zvzSLuxTG9C24EC6eA3cAt8bcFPIV8nyXEWou8Ss3OHXx9t-cysi3JkLchchOIrSHWKzhlXYgC1irZA-z4gUQcgFIG9BCOPoqtFQquyqxI~AfeDdZzj9pbpZ-UPAHASfExfTxA-dVvsN9owKt770woawsu7c5sEFQKz~HuMyzI2lOWIoDzJnKcflwhHj3y047Rarn84fDkSSPjtyTgTWEXiFArbQ__",
                items: ["مكابح وأسطوانات", "أنظمة تعليق", "محامل عجلات", "أقراص فرامل", "نوابض وممتصات", "أذرع تحكم", "وصلات مرن", "أحزمة أمان", "مفاتيح وأقفال", "أنظمة كهربائية", "أنظمة تبريد", "قطع محرك متقدمة"]
              }
            ].map((category, idx) => (
              <Card 
                key={idx}
                className="overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                  <h3 className="absolute bottom-4 right-4 text-3xl font-black text-foreground">
                    {category.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Features Section */}
      <section className="py-20 bg-card diagonal-section">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-foreground">
            مميزات العويل
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 glow-red"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, title: "أسعار جملة حقيقية", desc: "أفضل الأسعار للتجار والموزعين" },
              { icon: Package, title: "كميات مفتوحة", desc: "لا حد أدنى أو أقصى للطلبات" },
              { icon: Truck, title: "توريد سريع", desc: "شحن لجميع مدن المملكة" },
              { icon: FileText, title: "إمكانية التعاقد", desc: "عقود سنوية بأسعار تفضيلية" }
            ].map((feature, idx) => (
              <Card 
                key={idx}
                className="bg-background border-border hover:border-accent transition-all duration-300 hover:glow-gold group text-center"
              >
                <CardContent className="p-6">
                  <div className="hexagon w-20 h-20 bg-accent/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent transition-all">
                    <feature.icon className="w-10 h-10 text-accent group-hover:text-accent-foreground transition-all" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Process Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-foreground">
            آلية الطلب
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12 glow-gold"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "اختر الفئة", desc: "حدد نوع القطع أو الإكسسوارات المطلوبة" },
                { num: "2", title: "تواصل معنا", desc: "أرسل طلبك عبر النموذج أو واتساب" },
                { num: "3", title: "استلم عرض السعر", desc: "نرسل لك عرض سعر خاص بالعويل" }
              ].map((step, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="hexagon w-24 h-24 bg-primary mx-auto mb-4 flex items-center justify-center glow-red">
                    <span className="text-4xl font-black text-primary-foreground">{step.num}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-12 right-[-50%] w-full h-0.5 bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-card diagonal-section">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-foreground">
            اطلب تسعيرة الآن
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 glow-red"></div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-background border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">الاسم الكامل</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-2 bg-card border-border text-foreground"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-foreground">رقم الجوال</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="mt-2 bg-card border-border text-foreground"
                      placeholder="05xxxxxxxx"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="businessType" className="text-foreground">نوع النشاط</Label>
                    <Input 
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      required
                      className="mt-2 bg-card border-border text-foreground"
                      placeholder="مثال: معرض سيارات، ورشة صيانة، تاجر قطع غيار"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="quantity" className="text-foreground">تفاصيل الطلب والكمية</Label>
                    <Textarea 
                      id="quantity"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      required
                      className="mt-2 bg-card border-border text-foreground min-h-32"
                      placeholder="اذكر القطع المطلوبة والكميات التقريبية"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6 glow-red"
                  >
                    إرسال الطلب
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="hexagon w-12 h-12 bg-primary flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground">ابو عبدالله</h3>
                  <p className="text-sm text-muted-foreground">لقطع الاكسسورات</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                نوفر جميع أنواع قطع الغيار والإكسسوارات لجميع أنواع السيارات بشكل احترافي وبأسعار تنافسية في المملكة العربية السعودية
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-foreground">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">الرئيسية</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">المنتجات</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">من نحن</a></li>
                <li><a href="#contact-form" className="text-muted-foreground hover:text-primary transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-foreground">تواصل معنا</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>+966 50 000 0000</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MessageCircle className="w-5 h-5 text-accent" />
                  <span>واتساب: +966 50 000 0000</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>info@example.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground">
              © 2026 ابو عبدالله لقطع الاكسسورات. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-8 left-8 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 glow-gold"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}
