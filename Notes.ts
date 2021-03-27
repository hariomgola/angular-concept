/**

    # DataBindings
        - one Way  
            - OutputBinding (ts --->  Html)
                1. String Interpolation ( {{ data }})
                2. Property Binding ( [property] = 'data' )
            - React to Event (html ---> ts)
                1.Event Binding ( (event)="expression" )

        - two way binding
            ( [(ngModel)] = 'data' )



    # String Interpolation
        - String Interpolation only work with String or Something that return the string.
    Example
        -{{ 'Hari' }} or  {{ Name }}
        -{{ 'Welcome ' + Name}}
        -{{2+2}}
        -{{Name.length}}
        -{{Name.toUpperCase()}}
        -{{Profile()}}
    Restrication
        - Assigment of variable is Not Poosible {{ x=2+2 }}
        - Access to the global varaible is not possible for example window Screen or browser screen



    # Property Binding
        -Syntax [] or bind-
    
        - Attribute vs property
            - As you can see after Overriding $0.getAttribute('value') doesn't change becuase its bind to HTML
            - As you can see after Overriding $0.value will change beacuse its Bind to DOM (Document Object Model)
            - Attributes Intiliases once and after Initialising the value of attribute can't change but we can change the DOM.
            - By changing DOM element we can change property so Dom is Property binded.

        Use of PropertyBinding
            - Whenever we are going to chnage some property or mainly dom property of an Html Use Property Binding.
            - Whenever we are going to Print something on Html Use String Interpolation
 
 
    # Class and Style Binding
        - <h2 class="success">Hari</h2>
        - <h2 [class]="_Success">Hari</h2>              _Success = "success"
        - <h2 [class.success]="_error">Hari</h2>        _error = true
        - <h2 [ngClass]="_obj">Hari</h2>                _obj = {success : true,failed:false}

        Style Binding
            - Style Binding is same as Class binding
            - Conditionally binding is possible in style binding
            - we can use multiple style in style biniding
            - <h1 [style.color] = "'red'">Style Binding Example 1</h1>
            - <h1 [style.color] = " error ? 'red' : 'green' ">Style Binding Example 2</h1>
            - <h1 [style.color] = "sproperty">Style Binding Example 3</h1>
            - <h1 [ngStyle] = "ngBinding">Style Binding Example 4</h1>

    #Event-Binding
        -Syntax ( )=""

    #Structural Directives
     - Directives or mainlt structural directives are the set of instruction to Angular About which Element in HTML have to Add or remove on Basis of certain condition
     - Directives Start with * - it represents its a structural directive which is going to change DOM in HTML

        - In-Build Directives
            - ngIf      (Consitional Directives)
            - ngSwitch  (Consitional Directives)
            - ngFor     (List of Elements in HTML)

    
    #ngSwitch
        - [ngSwitch]
        - *ngSwitchCase
        - *ngSwitchDefault
    #ngFor
        - Syntax
            *ngFor 

            
    # Component Interaction
        - Parent Component - AppComponent
        - Child Component - DevComponent
        - @Input (parent -----> Child)   'Hari'
        - @ouput (child -----> Parent ) 'Hi I am from Codeme'

    #Pipes
        - Pipes allow us to transform the data before displaying them into the browser


    #Services
        -Programming Principals
	1. DRY (Don’t repeat yourself) 
	2. Encapsulate What Changes
	3. Open Closed Design Principle
	4. Single Responsibility Principle (SRP)
	5. Dependency Injection or Inversion Principle
	6. Favor Composition over Inheritance
	7. Liskov Substitution Principle (LSP)
	8. Interface Segregation Principle (ISP)
	9. Programming for Interface not implementation
	10. Delegation Principles


        - Service is a special class used for specific purpose.
        - Services Needed
            1. Share Data 
            2. Implement Application Logic
            3. External Interaction (Db or API calls)
 
    Syntax 
        - .service.ts
 
 
 
 
 
 
 
*/